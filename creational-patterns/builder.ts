/**
 * 生成器模式
 */
interface Builder {
	producePartA(): void;
	producePartB(): void;
	producePartC(): void;
}

class Product1 {
	public parts: string[] = [];

	public listParts(): void {
		console.log(`Product parts: ${this.parts.join(", ")}\n`);
	}
}

class ConcreteBuilder1 implements Builder {
	private product: Product1;

	constructor() {
		this.reset();
	}

	public reset(): void {
		this.product = new Product1();
	}

	public producePartA(): void {
		this.product.parts.push("PartA1");
	}

	public producePartB(): void {
		this.product.parts.push("PartB1");
	}

	public producePartC(): void {
		this.product.parts.push("PartC1");
	}

	public getProduct(): Product1 {
		const result = this.product;
		this.reset();
		return result;
	}
}

class Director {
	private builder: Builder;

	public setBuilder(builder: Builder): void {
		this.builder = builder;
	}

	public buildMinimalViableProduct(): void {
		this.builder.producePartA();
	}

	public buildFullFeaturedProduct(): void {
		this.builder.producePartA();
		this.builder.producePartB();
		this.builder.producePartC();
	}
}

const clientCode: (director: Director) => void = (director: Director): void => {
	const builder = new ConcreteBuilder1();
	director.setBuilder(builder);
	director.buildMinimalViableProduct();
	builder.getProduct().listParts();

	director.buildFullFeaturedProduct();
	builder.getProduct().listParts();

	console.log("Custom product:");
	builder.producePartA();
	builder.producePartC();
	builder.getProduct().listParts();
};
const director = new Director();
clientCode(director);
export default {};
