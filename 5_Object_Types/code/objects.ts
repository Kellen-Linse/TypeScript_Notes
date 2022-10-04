

function printName(person: {first: string, last: string}):void {
  console.log(person.first);
}

printName({first: 'Mya', last: 'Linse'});

//===========

// You wouldn't really do this, but you could:
let coordinate: {x: number, y: number} = {x: 2, y: 6};

//============

function makeCoodinate(inX: number, inY: number): {x: number, y: number}{
  return {x: inX, y: inY};
}

//============

// A type alias
type Cat = {
  name: string;
  age: number;
}

// Using the type alias in the annotation
const sayHappyCatBirthday = (cat: Cat):string => {
  return `${cat.age} Happy Kitty Birthdays, ${cat.name}`;
}

console.log(sayHappyCatBirthday({name: 'Mya', age: 11}));
