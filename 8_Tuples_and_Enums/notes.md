# Tuples and Enums

### Introducing Tuples

- Tuples are arrays of fixed length and ordered with specific types - like very ridged arrays.
- Can have mixed types and the order matters.
- Tuples are rules defined on top of array.
- Not used that often, but good to know.

> *Tuples are fixed in their length and their type(s).*

```TS
// Creating a Tuple with its type definition
  let myTuple: [number, string];

// Can assign
myTuple = [10, "Ten"];

// Can't assign
myTuple = ["Ten", 10];

// Can be whatever length you want
const color: [number, number, number] = [255, 0, 255];

// Creating a tuple type
type HTTPres = [number, string];

// Declaring a tuple
const goodRes: HTTPres = [200, "OK"];

// Using an array of our defined type
const resArray: HTTPres[] = [[200, "OK"], [404, "ERR"]]
```

### Introducing Enums

- Enums allow us to define a set of named constants. We can give these constants numeric or string values.
- TS assigns values if you do not assign any (not as common).
- Enums are just a convenient way of doing things.
  - Helps with autocomplete...
- Enums are not that much as the TS community wants to stay closer to JS.

```TS
// Numeric Enums
    enum Responses {
      NO, // 1
      YES, // 2
      MAYBE, // 3
    }

    enum Responses {
      NO = 2, // 2
      YES, // 3
      MAYBE, // 4
    }

    enum Responses {
      NO = 2, // 2
      YES = 4, // 4
      MAYBE = 10, // 10
    }

// String Enums
    enum Responses {
      NO = 'No',
      YES = 'Yes',
      MAYBE = 'Maybe',
    }

// Heterogeneous Enums
    enum Responses {
      NO = '1',
      YES = '2',
      MAYBE = 'Maybe',
    }
```

- Example of use:

```TS
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
  return status === OrderStatus.DELIVERED;
}
```

- Adding `const` to an enum will replace every value in the enum with it's value.

