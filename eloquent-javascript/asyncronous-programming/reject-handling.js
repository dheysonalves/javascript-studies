new Promise((_, reject) => reject(new Error("Fail")))
	.then(value => console.log("Handler 1"))
	.catch(reason => {
		console.log("Caught failure " + reason);
		return "nothing";
	})
	.then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing
