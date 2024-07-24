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
- [0-promise.js](./0-promise.js)
- Task: Return a Promise using this prototype `function getResponseFromAPI()`
- Test Code: [0-main.js](./0-main.js)
```
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

```