# Functions

### Function Parameter Annotations

- Same rules apply as do for variable type annotation
  - Ex:
```ts
function square(num: number){
  return num * num;
}

const doSomething = (person: string, age: number, boolean: false) => {
  return "nothing"
}
```
- TS will yell at you if you do not provide the correct types, or the right number of arguments.

### Working with Default Parameters

- Example of Default Parameter:

```ts
function greet(name: string = "Mya"){
  console.log(`Hi there ${name}!`);
}
```

### Return Type Annotation

- The return type can be declared or it can be inferred
- For declared it will go after the arguments
- Helps with function readability as well
  - Ex:
```ts
  function add(x: number, y: number):number {
    return x + y;
  }

  const add = (x: number, y: number):number => {
    return x + y;
  }
```

### Anonymous Function Contextual Typing

- TS can infer types of anonymous functions parameters
  - Ex:
```ts
const colors = ['red', 'blue'];

colors.forEach( color => console.log(color)); // TS will know that color is of type 'string'
```

### The 'Void' Type

- 'void' is a return type for functions that don't return anything.
- TS can infer this pretty well, but sometimes you may want to be explicit.
- Ex:
```ts
  const noReturn = (nothing: string):void => console.log(nothing);
```

### The 'Never' Type

- The never type represents values that **NEVER** occur.
- We might use the never type to annotate a function that never finishes, or always throws an exception.
- Ex:
```ts
  function makeError(msg: string): never {
    throw new Error(msg);
  }
```