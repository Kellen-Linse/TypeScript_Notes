# Interfaces

### Introducing Interfaces

> Interfaces serve almost the exact same purpose as type aliases (with slightly different syntax).

<br>

- Interfaces can be used to create reusable, modular types that describe the shapes of objects.

```TS
interface Person {
  name: string;
  age: number;
}

// Use the type alias
const sayHappyBirthday = (person: Person) => {
  return `Hey ${person.name}, congrats on turning ${person.age}!`;
}

sayHappyBirthday({name: 'Mya', age: 11});
```

### Readonly and Optional Interface Properties

- Optional
  - Sometimes we want to add optional properties to our interfaces.
  - To make a property on an interface optional, we add a question mark after the property name, but before the semicolon.

```TS
interface Person {
  name: string;
  age: number;
  nickname?: string; // optional 
}
```

- Readonly
  - Sometimes we want a readonly property. Meaning that once it is set we cannot modify that property.

```TS
interface Person {
  name: string;
  age: number;
  nickname?: string; // optional 
  readonly id: number;
}

const myaCat: Person = {name: 'Mya', age: 11, nickname: 'MooCow', id: 1};

myaCat.name = 'Moo'; // No problem changing this
myaCat.id = 2;       // This will throw an error.
```

### Interface Methods

- We can define methods on interfaces as well.
- There are two ways we can do this.

```TS
// First way (arrow fn)
  sayHi: (argumentName: argumentType) => returnValueType;

interface Person {
  name: string;
  age: number;
  numToString: (numVar: num) => string;
}

// Second way(method def)
  sayHi(argumentName: argumentType): returnValueType;

interface Person {
  name: string;
  age: number;
  numToString(numVar: num): string;
}
```

### Reopening Interfaces

- We can "reopen" an interface and add new properties and methods after we have already defined an interface.
  - **This is something we CANNOT do with type definitions.**

```TS

// First definition
interface Person {
  name: string;
  age: number;
}

// Some definition later in your code
interface Person {
  nickname?: string; // optional 
  readonly id: number;
}

// No error here as all properties are combined.
const myaCat: Person = {name: 'Mya', age: 11, nickname: 'MooCow', id: 1};
```

### Extending Interfaces

- We can "extend" or essentially "inherit" from another interface.
- We use the `extends` keyword to do this.

```TS

interface WorkingPerson extends Person {
  job: string;
}

const sarah: WorkingPerson = {
  name: 'Sarah', 
  age: 32, 
  nickname: 'Puff', 
  id: 2,
  job: 'Head Honcho'
  };
```

### Interface Multiple Inheritance

- We can extend an interface from multiple interfaces.
- We do this by adding all interfaces we wish to extend separated by commas.

```TS
interface newPerson {
  name: string;
}

interface Employee {
  readonly id: string;
  email: string;
}

interface Engineer extends newPerson, Employee {
  level: string;
  languages: [];
}

const kellen: Engineer = {
  name: 'Kellen',
  id: 3,
  email: 'kellen@fakeEmail.com',
  level: 'junior',
  languages: ['TS', 'JS'],
}
```

### Types vs Interfaces

- Interfaces can **only describe the shape of an object**.
  - Types can describe **any type**, even literal types.

```TS
interface someInterface {
  someProperty: string;
}

type color = "red" | "blue"; // interface can't do this.
```

- types cannot be reopened.
- types cannot use the "extends" keyword.

