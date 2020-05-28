export function greeting(name?: string): string {
	if (name === undefined) {
		throw new Error(`No-one is here`);
	}
	return `Hello ${name}`;
}

let personalGreeting = greeting('Jeroen');

console.log(personalGreeting);
