/**
 * 代理模式：让你能提供真实服务对象的替代品给客户端使用。 代理接收客户端的请求并进行一些处理 （访问控制和缓存等）， 然后再将请求传递给服务对象
 */

interface Subject {
	request(): void;
}

class RealSubject implements Subject {
	public request(): void {
		console.log("RealSubject: Handling request.");
	}
}

class Proxy implements Subject {
	private realSubject: RealSubject;

	constructor(realSubject: RealSubject) {
		this.realSubject = realSubject;
	}

	public request(): void {
		if (this.checkAccess()) {
			this.realSubject.request();
			this.logAccess();
		}
	}

	private checkAccess(): boolean {
		console.log("Proxy: Checking access prior to firing a real request.");
		return true;
	}

	private logAccess(): void {
		console.log("Proxy: Logging the time of request.");
	}
}

function clientCode(subject: Subject) {
	subject.request();
}

console.log("Client: Executing the client code with a real subject:");
const realSubject = new RealSubject();
clientCode(realSubject);

console.log("");

console.log("Client: Executing the same client code with a proxy:");
const proxy = new Proxy(realSubject);
clientCode(proxy);

export default {};
