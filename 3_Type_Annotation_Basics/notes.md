# Type Annotation Basics

### Our First Type Annotation 

- To assign a **type**, just add `:Type` after the variable name.
  - Ex: 

```ts
const variableName: string = 'wow I'm a string!';
```

- Syntax:

```ts
let myVar: type = value;`
```

- **All types are _lowercase_**

### Numbers and Booleans

- Numbers are just still numbers, as they are in JS
  - Ex: 

```ts
let myNum: number = 41;
```

- Boolean
  - Ex:
    - `let myBool: boolean: false;'

- Also symbol and bigInt, but rarely used

### Type Interface

- Most of the time we can rely on *Type Inference* instead of assigning types.
- The TS compiler has the ability to infer types from certain values in code.
- TS can figure out a values type, and then remember/enforce that type after it sees it.
<br>

- If we are setting a variable right after we declare it, TS can just figure out what type it is.
  - Ex:


```ts
let x = 24; // TS will know that x is of type number;
```

### The 'Any' Type

- 'any' is a type that turns off type checking, you will be able to assign any type and any time to an any variable.
  - This is antithetical to TypeScript, so try not to use it too much.

### Delayed Initialization & Implicit Any

- If we declare a variable and **DO NOT** define it, TS will assign that variable to the 'any' type.
  - but, we can declare a variable and assign it a type without defining it in TS.
    - Ex:

```ts
  let foundMovie; // This will have the inferred type of 'any'

  let foundMovie: string; // This will have type 'string'
```

