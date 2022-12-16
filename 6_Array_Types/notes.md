# Array Types

### Working with Array Types 

- `let varName: arrayType[] = [];`
- Arrays can be typed using a type annotation followed by empty array brackets, like `number[]` for an array of numbers.

```ts
//Using Brackets:
  // string array
  let strings: string[] = ["hello", "world"]; // Tells TS that this array will only hold strings

  // number array
  let numbers: number[] = [1, 3, 5];

// Alternate Syntax:
  let strings: Array<string> = ["hello", "world"];
```

- There are some things to be aware of when declaring a variable an array:

```ts
const activeUsers: [] = []; // <----- This has just told TS that activeUsers is of type EMPTY array. 

// So something like this:
activeUsers.push("something"); // Will return an error.
```

// Alternate Syntax for Array Types

- We can declare an array with this syntax, we will see this more with other things in the future.

```ts
// Alternate Syntax:
  let strings: Array<string> = ["hello", "world"];
```

- We can use primitive types or types we have defined ourselves

```ts
type Points = {
  x: number,
  y: number
}

let pointsArr: Points[] = [];

pointsArr.push({x: 2, y: 3}); // <------- No error here!
pointsArr.push({x: 2, someString: "Yo"}); // <------- Error here!

```

### Multi-Dimensional Arrays

- If we want a multi-dimensional array, we need to add another set of array brackets for each additional dimension.
- Example:

```ts
let twoDimensionalArr: number[][] = [[1, 2, 3], [4, 5, 6]];
let threeDimensionalArr: number[][][] = [[[1]]];
```