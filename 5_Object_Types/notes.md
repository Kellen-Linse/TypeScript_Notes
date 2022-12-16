# Object Types

### Working with Object Types

- Objects can be typed by declaring what the object should look like in the **annotation**.
- Accessing a property that is not defined or performing operations without keeping types in mind will throw an error.
- We can define what an object should look like when it is passed in to a function inside of the function parameters

```ts
function printName(person: {first: string, last: string}):void {
  console.log(person.first);
}

printName({first: 'Mya', last: 'Linse'});
```

- We can do the same thing for a return type or even when declaring a variable.

- Defining an object as a type before declaring a variable:

```ts
// You wouldn't really do this, but you could:
let coordinate: {x: number, y: number} = {x: 2, y: 6};
```

- Defining an object as a return type:

```ts
function makeCoodinate(inX: number, inY: number): {x: number, y: number}{
  return {x: inX, y: inY};
}
```

### Excess Properties

- When you define an object literal as a function parameter, when you pass in an **object literal**, it **CAN'T have more properties and methods** that you defined ahead of time. 
  - You can't add anything in addition to the pre-defined properties and methods.
- But when you pass in an **object as a variable** it **CAN have more properties and methods** on it.
- Example:

```ts
function printName(person: {first: string, last: string}):void {
  console.log(person.first);
}

printName({first: 'Mya', last: 'Linse', age: 11}); // <------ THIS WILL THROW AN ERROR! (age is extra)

const myaStats = {first: 'Mya', last: 'Linse', age: 11};

printName(myaStats); // <----------- THIS WILL NOT THROW AN ERROR (even tho age is extra)

// They just decided it would be this way when they made TS, just remember it works this way.
```

### Type Alias

- Instead of writing out object types in an annotation, we can declare them separately in a **type alias**, which is simply the desired shape of the object.
  - This us to make the code more reusable and more readable.
- We declare a type alias with the `type` keyword.
- Convention is that the type alias starts with an **Uppercase** letter.

```ts
// A type alias
type Cat = { // <----------- notice the 'type' keyword and the uppercase C in cat
  name: string;
  age: number;
}

// Using the type alias in the annotation
const sayHappyCatBirthday = (cat: Cat):string => {
  return `${cat.age} Happy Kitty Birthdays, ${cat.name}`;
}

console.log(sayHappyCatBirthday({name: 'Mya', age: 11}));
```

### Nested Objects

- We can define nested types and objects as well.

```ts
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  }
}
```

### Optional Properties

- you can **add a `?` after the property name** and before the colon to make that property optional.
- Ex:

```ts
type Point = {
  x: number;
  y: number;
  z?: number; // <-------- The ? makes this property optional
}
```

### The 'readonly' Modifier

- We can mark a property as read only using the 'readonly' modifier, and then TS will yell at us if we try to write to that property.
- You can assign a value to it, you just can't reassign it.

```ts
type User = {
  readonly id: number; 
  userName: string;
}

const user1: User = {
  id: 222;
  userName: 'MyaMooCow';
}

user1.id = 234234; // <-------- This will throw a "readonly" error.
```

### Intersection Types

- We can **combine** types using the **`&`** symbol.
- Ex:

```ts
type Circle = {
  radius: number;
}

type Color = {
  color: string;
}

type ColorfulCircle = Circle & Color; //<----------- notice the use of the & symbol

const greenCircle: ColorfulCircle = { // <------ Here we have properties of both Circle and Color objects.
  radius: 4,
  color: 'green'
}
```

- We can also add on other properties

```ts
type ColorfulCircleAndMore = Circle & Color & { some: string }; // <---- Here we have added some other property 

const greenCircle: ColorfulCircleAndMore = {
  radius: 4,
  color: 'green',
  some: 'other string'
}
```