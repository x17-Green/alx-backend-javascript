# 0x00. ES6 Basics 
## Description
This project is about learning the basics of ES6


![meme](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240725%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240725T160715Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=90b8d33628de1ec39762b3eec1834baf6a203965845cb26a9962b16f4433acc6)

## Resources
**Read or watch**:
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp "ECMAScript 6 - ECMAScript 2015")
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements "Statements and declarations")
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "Arrow functions")
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters "Default parameters")
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters "Rest parameter")
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=6ceb5f443319 "Javascript ES6 — Iterables and Iterators")

## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/ "Jest Testing Framework")
- Your code will be analyzed using the linter [ESLint](https://eslint.org/ "ESLint") along with specific rules that we’ll provide
- All of your functions must be exported

## Tasks, Files & Description
### 0. Const or let? 
- File: [0-constants.js](./0-constants.js)
- Task: Modify
    - function `taskFirst` to instantiate variables using `const`
    - function `taskNext` to instantiate variables using `let`
        ```
        export function taskFirst() {
        var task = 'I prefer const when I can.';
        return task;
        }

        export function getLast() {
        return ' is okay';
        }

        export function taskNext() {
        var combination = 'But sometimes let';
        combination += getLast();

        return combination;
        }
        ```
- Execution example:
    ```
    ╭─green@greenhouse
    ╰─➤  cat 0-main.js 
    import { taskFirst, taskNext } from './0-constants.js';

    console.log(`${taskFirst()} ${taskNext()}`);
    ╭─green@greenhouse
    ╰─➤  npm run dev 0-main.js 

    I prefer const when I can. But sometimes let is okay
    ╭─green@greenhouse
    ╰─➤  
    ```

### 1. Block Scope 
- File: [1-block-scoped.js](./1-block-scoped.js)
- Task: Modify the variables inside the function `taskBlock`
    - So the variables aren’t overwritten inside the conditional block.
        ```
        export default function taskBlock(trueOrFalse) {
            var task = false;
            var task2 = true;

            if (trueOrFalse) {
                var task = true;
                var task2 = false;
            }

            return [task, task2];
        }
        ```
- Execution Example: ([`1-main.js`](./1-main.js))