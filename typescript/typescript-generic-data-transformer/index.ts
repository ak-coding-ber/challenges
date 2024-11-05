type TransformationRules<T> = {
  /*
  - changed return type to T[Property] 
  - this enforces that each transformation function has to return the same type as the original property
  - e.g. transformation function for age cannot return a result of type string 
  */

  [Property in keyof T]?: (value: T[Property]) => T[Property];
};

function transformData<T extends object>(
  items: T[],
  rules: TransformationRules<T>
): T[] {
  return items.map((item) => {
    // we don't want to mutate the original item, so we need to make a copy of each item from items array
    const transformedItem = { ...item };

    for (const key in rules) {
      //iterates over every key in rules and checks if this key exists inside the actual item
      // rules[key] checks if there is an actual transformation function for that key
      if (key in transformedItem && rules[key]) {
        /* 
        - if both of the above checks passed, the transformation rule is applied to that property e.g. age
        - '!' tells the compiler that I am certain rules[key] is not null or undefined and that the transformation function 
          can safely be called without any additional checks
        - transformedItem[key] will be handed over as argument to the transformation function
        */

        transformedItem[key] = rules[key]!(transformedItem[key]);
      }
    }

    return transformedItem;
  });
}

const data = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Doe", age: 32, hometown: "Berlin" },
];

const rules = {
  name: (value: string) => value.toUpperCase(),
  age: (value: number) => value + 10,
  hometown: (value: string) => "Hometown is " + value,
};

// log data before transformations
console.log("\nOriginal Data:\n\n", data);

// log data after transformations
console.log("\nTransformed Data:\n\n", transformData(data, rules));

// Testing Edge Cases

// empty rules object, should return original data
console.log("\nTransformed Data - no ruleset:\n\n", transformData(data, {}));

// property in rules not in data - uncomment to test

// const dataWithMissingProps = [{ id: 1, age: 28 }];
// const partialRules = { name: (value: string) => value.toUpperCase() };
// console.log(transformData(dataWithMissingProps, partialRules));

// mismatched types – uncommenting should throw an error (see line 1)

// const wrongRules = { age: (value: number) => value.toString() }; // Expected number, returns string
// console.log(transformData(data, wrongRules));
