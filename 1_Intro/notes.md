# Introduction

## *"TypeScript is JavaScript with a type system."*
## *"TypeScript's goal is to help us find errors before our code ever runs"*

### The Case for Typescript

- In Javascript You Can Do Things Like:
  - Multiply `null` by a number and not get an error
  - Multiply `undefined` by a number and not get an error
  - You can access properties that don't exist on an object without getting an error
  - 
- These can cause unintended errors if not caught
<br>

- JS was not built to be the major language it is today, it was supposed to be a small scripting language for the browser
  - There have been enhancements to the language, but it is still JS
- This is where TypeScript comes in...
<br>

- **TypeScript is a language that is built on top of JavaScript with the purpose of helping us avoid the common pitfalls and bugs that arise in JavaScript. And it seeks to improve the experience of writing JavaScript.**
  - The way that it does this is by **adding types**.
- **TypeScript is a superset of JavaScript**

### TypeScript Overview

- **Static Checking**
  - TypeScript performs *static checking*, meaning that it detects errors in our code **without running the code.**
<br>

- **Type Checking**
  - TS does this error checking on the basis of the "kind of data" in our program AKA *types*.
  - It does all of it's type checking pre-runtime.

- **Why Types?**
  - TS's type system:
    - Helps ups find errors
    - Analyzes our code as we type
    - Only exists in development
    - It will find issues before code is ever even run in a browser

- **TypeScript is there for development purposes**
  - TS helps us find errors in development, but then is compiled to JS before it is ever run.