const value = 'something to say!';
let object = '{ "title": "This is a test"}';

try {
	let parsed = JSON.parse()
	console.log(parsed.name);
	// This below is never reached!
} catch (error) {
	console.log('You are trying to: ', error.message);
	console.log('Call stack here!: ', error.stack);
}

/*
	Try - catch works synchronsly
	and it runs on the parsed time,
	if it was outside the block, would
	already catch the error, jumping the timeout
	function
*/
setTimeout(() => {
	try {
		whatisthis
	} catch (error) {
		console.log('Something is: ', error.message);
	}
}, 1000);


// Rethrowing
/*
	We can basically
	set the specificy error and rethrow the others
*/

function rethrowError() {
	try {
		faafafa
		try {
			user = [].length;
		} catch (error) {
			if (!(error instanceof TypeError)) {
				throw error;
			}
		}
	} catch (error) {
		console.log('basically you fell here: ', error.message);
	}
}

rethrowError();
