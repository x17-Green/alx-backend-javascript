# 0x01. ES6 Promises 
## Description
This project is about Promises in JavaScript

![meme](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240724%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T182711Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f2ba5d9f6eb7685cc24c8b2b05dac054ec05ceb0f869360ac807010174db679b)
## Resources
Read or watch:
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promises: An Introduction](https://web.dev/articles/promises)
* [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an `async` function

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Tasks, Files & Description
### 0. Keep every promise you make and only make promises you can keep
- File: [`0-promise.js`](./0-promise.js)
- Task: Return a Promise using this prototype `function getResponseFromAPI()`
- Test Code: [0-main.js](./0-main.js)
```
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

```

### 1. Don't make a promise...if you know you can't keep it 
- File: [`1-promise.js`](./1-promise.js)
- Task: Using the prototype below, return a promise. The parameter is a boolean
	- `getFullResponseFromAPI(success)`
- Test Code: [1-main.js](./1-main.js)
```
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```

### 2. Catch me if you can!
- File: [`2-then.js`](./2-then.js)
- Task: Using the function prototype below
	```
	function handleResponseFromAPI(promise)
	```
	Append three handlers to the function:
	- When the Promise resolves, return an object with the following attributes
		- `status`: `200`
		- `body`: `success`
	- When the Promise rejects, return an empty `Error` object
	- For every resolution, log `Got a response from the API` to the console
- Test Code: [`2-main.js`](./2-main.js)
	```
	import handleResponseFromAPI from "./2-then";

	const promise = Promise.resolve();
	handleResponseFromAPI(promise);
	```

### 3. Handle multiple successful promises 
- File: [`3-all.js`](./3-all.js)
- Task: In this file, import `uploadPhoto` and `createUser` from `utils.js`
	- Knowing that the functions in utils.js return promises
	- Use the prototype below to collectively resolve all promises and log body firstName lastName to the console.
		```
		function handleProfileSignup()
		```
	- In the event of an error, log `Signup system offline` to the console
- Test Code: [`3-main.js`](./3-main.js)
	```
	import handleProfileSignup from "./3-all";

	handleProfileSignup();
	```

### 4. Simple promise
- File: [`4-user-promise.js`](./4-user-promise.js)
- Task: Using the following prototype
	```
	function signUpUser(firstName, lastName) {
	}
	```
	- That returns a resolved promise with this object:
		```
		{
		  firstName: value,
		  lastName: value,
		}
		```
- Test Code: [`4-main.js`](./4-main.js)
	```
	import signUpUser from "./4-user-promise";

	console.log(signUpUser("Bob", "Dylan"));
	```

### 5. Reject the promises
- File: [`5-photo-reject.js`](./5-photo-reject.js)
- Task: Write and export a function named `uploadPhoto`. 
	- It should accept one argument `fileName` (string). 
	- The function should return a Promise rejecting with an Error 
	- And the string `$fileName cannot be processed`
		```
		export default function uploadPhoto(filename) {

		}
		```
- Test Code: [`5-main.js`](./5-main.js)
	```
	import uploadPhoto from './5-photo-reject';

	console.log(uploadPhoto('green.jpg'));
	```

### 6. Handle multiple promises
- File: [`6-final-user.js`](./6-final-user.js)
- Tasks:
	- Import `signUpUser` from 4-`user-promise.js`
	- Import `uploadPhoto` from 5`-photo-reject.js`
		- Write and export a function named `handleProfileSignup`
			- It should accept three arguments
				- `firstName` (string)
				- `lastName` (string)
				- `fileName` (string)
		- The function should call the two other functions
		- When the promises are all settled it should return an array with the following structure:
			```
			[
				{
					status: status_of_the_promise,
					value: value or error returned by the Promise
				},
				...
			]
			```
- Test Code: [`6-main.js`](./6-main.js)
	```
	import handleProfileSignup from './6-final-user';

	console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
	```

### 7. Load balancer
- File: [`7-load_balancer.js`](./7-load_balancer.js)
- Task: Write and export a function named `loadBalancer`
	- It should accept two arguments
		- `chinaDownload` (Promise)
		- `USDownload` (Promise)
	- The function should return the value returned by the promise that resolved the first.
		```
		export default function loadBalancer(chinaDownload, USDownload) {
			
		}
		```
- Test Code: [`7-main.js`](./7-main.js)
	```
	import loadBalancer from "./7-load_balancer";

	const ukSuccess = 'Downloading from UK is faster';
	const frSuccess = 'Downloading from FR is faster';

	const promiseUK = new Promise(function(resolve, reject) {
		setTimeout(resolve, 100, ukSuccess);
	});

	const promiseUKSlow = new Promise(function(resolve, reject) {
		setTimeout(resolve, 400, ukSuccess);
	});

	const promiseFR = new Promise(function(resolve, reject) {
		setTimeout(resolve, 200, frSuccess);
	});

	const test = async () => {
		console.log(await loadBalancer(promiseUK, promiseFR));
		console.log(await loadBalancer(promiseUKSlow, promiseFR));
	}

	test();

	```

### 8. Throw error / try catch
- File: [`8-try.js`](./8-try.js)
- Task: Write and export a function named `divideFunction`
	- It should accept two arguments
		- `numerator` (number)
		- `denominator` (number)
	- When the `denominator` argument is equal to 0
		- Throw a new error with the message `cannot divide by 0`.
	- Otherwise return the numerator divided by the denominator
		```
		export default function divideFunction(numerator, denominator) {

		}
		```
- Test Code: [`8-main.js`](./8-main.js)
	```
	import divideFunction from './8-try';

	console.log(divideFunction(10, 2));
	console.log(divideFunction(10, 0));
	```

### 9. Throw an error 
- File: [`9-try.js`](./9-try.js)
- Task: Write and export a function named `guardrail`
	- It should accept one argument
		- `mathFunction` (Function)
	- This function should create and return an array named `queue`.
		> When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue. 
	- Example
		```
		[
			1000,
			'Guardrail was processed',
		]
		```
- Test Code: [`9-main.js`](./9-main.js)
	```
	import guardrail from './9-try';
	import divideFunction from './8-try';

	console.log(guardrail(() => { return divideFunction(10, 2)}));
	console.log(guardrail(() => { return divideFunction(10, 0)}));
	```

### 10. Await / Async
- File: [`100-await.js`](./100-await.js)
- Task: 
  	- Import `uploadPhoto` and `createUser` from `utils.js`
	- Write and export an async function named `asyncUploadUser`
		- It should call imported functions and return an object
		- **Format**
			```
			{
				photo: response_from_uploadPhoto_function,
				user: response_from_createUser_function,
			}
			```
		- If one of the async function fails, return an empty object.
		- **Example:**
			```
			{
			photo: null,
			user: null,
			}
			```
- Test Code [`100-main.js`](./100-main.js)
	```
	import asyncUploadUser from "./100-await";

	const test = async () => {
		const value = await asyncUploadUser();
		console.log(value);
	};

	test();
	```
