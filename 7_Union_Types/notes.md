# Union Types

### Introducing Union Types

> Union types allow us to give a value a few different possible types.

<br>

> Union types are created by using a single `|` (pipe character) to separate the types we want to include.
> - It's like saying *"This thing is allowed to be this, or this, or this type etc...*
> - TS will enforce the types from there.

<br>

```ts
//A function with a union type parameter
const guessAge(age: number | string) => {
  return "Your age is:" + age;
}

// Can pass in a string or a number
guessAge(34);
guessAge("two");

// anything else will through an error
guessAge({guessedAge: 3}); // ERROR
```

### Type Narrowing with Union Types

- If you pass in a value that may be either of several different types of values and then try to act on one of those values in a way that will only work for one of those types, TS will have a problem with that.

```TS
// here price can be either a string or a number, but we cannot multiply a string

function calcTax(price: number | string, tax: number): number {
  return price * tax; // TS will yell at you and highlight price
}
```

<br>

- **TypeScript knows if you have done some conditional logic or type checking and will not throw an error in that case.**

```TS
// TS will not throw an error for this function, it knows price is being checked
function calcTax(price: number | string, tax: number): number {
  if(typeof price === "string"){
    price = parseFloat(price.replace("$", ""));
  } 
  return price * tax

}
```

### Union Types and Arrays

- We can declare an array of more than one type as well.
- **We must use parenthesis around the types!**
  - `(number | string)`

```TS

// The parenthesis tell TS there are two types
const twoThings: (number | string)[] = [1, 'two', 3];

// Without the parens, you are saying you have either a var of type 1 (number)
// or an array of type2
const numOrArrayOfStrings: number | string[] = [1]; // NOT VALID
```

### Literal Type

- Literal types are not just the types - but the **values themselves** too!
- Almost always used with the union type.
- Allows for fined tuned type options for TS to enforce.

```TS
// A function with a literal plus union type parameter
const giveAnswer(answer: 'yes' | 'no' | 'maybe') => {
  return `the answer is ${answer}.`;
}

giveAnswer('yes'); // Accepted
giveAnswer('nah'); // NOT accepted 
```