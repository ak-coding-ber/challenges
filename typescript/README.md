# Challenges: typescript

## TypeScript Coding Challenge: Address Book Application

### Challenge Overview

In this coding challenge, you will leverage TypeScript's static typing system to create a simple, type-safe address book application. This challenge is designed to reinforce the basics of TypeScript, including working with types, interfaces, and arrays. Your application will allow users to add, remove, and search for contacts in an address book.

### Requirements

1. **Define Contact Interface**: Create an interface named `Contact` with the following properties:

   - `id`: A unique identifier for the contact (type `number`).
   - `name`: The name of the contact (type `string`).
   - `email`: The email address of the contact (type `string`).
   - `phone`: The phone number of the contact (optional, type `string`).

2. **Implement Add Contact Function**: Write a function named `addContact` that takes a `Contact` object and adds it to an array of `Contact` objects. Ensure that each contact has a unique `id`.

3. **Implement Remove Contact Function**: Write a function named `removeContact` that takes a contact `id` and removes the contact with that `id` from the address book.

4. **Implement Search Function**: Write a function named `searchContacts` that searches for contacts by name and returns an array of contacts that match the search query. The search should be case-insensitive.

5. **Optional: Enhance Search Functionality**: Extend the `searchContacts` function to allow searching by email or phone number in addition to the name.

### Starter Code

```typescript
interface Contact {
  // TODO: Define the Contact interface
}

let addressBook: Contact[] = [];

function addContact(contact: Contact): void {
  // TODO: Implement the addContact function
}

function removeContact(id: number): void {
  // TODO: Implement the removeContact function
}

function searchContacts(query: string): Contact[] {
  // TODO: Implement the searchContacts function
}
```

### Instructions

1. Begin by defining the `Contact` interface according to the requirements specified above.
2. Implement the `addContact`, `removeContact`, and `searchContacts` functions, making sure to adhere to the type definitions you've created.
3. Ensure your functions handle edge cases, such as attempting to add a contact with an existing `id` or trying to remove a contact that doesn't exist.
4. Test your application by creating a few contacts, removing a contact, and searching for contacts by various attributes.

### Evaluation Criteria

- **Type Safety**: Proper use of TypeScript features to enforce type constraints throughout the application.
- **Functionality**: The application should correctly add, remove, and search for contacts as specified.
- **Code Quality**: The code should be well-organized, properly commented, and easy to read.
- **Edge Case Handling**: The application should gracefully handle and report errors or invalid operations.

### Submission

Submit your TypeScript file containing the implementation of the address book application. Ensure your code is well-commented to explain your logic and decisions.

---

This coding challenge is designed to test your understanding of TypeScript's basic features and how they can be applied to solve common programming tasks. Good luck!

## TypeScript Coding Challenge: Simple Inventory Management System

### Challenge Overview

Your task is to create a basic inventory management system using TypeScript. This system will track items in an inventory, including their name, quantity, and category. The challenge will test your ability to define types and interfaces, work with arrays, and implement functions for adding, updating, and retrieving items from the inventory.

### Requirements

1. **Define an Item Interface**: Create an interface named `Item` that includes the following properties:

   - `id`: A unique identifier for the item (type `string`).
   - `name`: The name of the item (type `string`).
   - `quantity`: The quantity of the item in stock (type `number`).
   - `category`: The category of the item (type `string`).

2. **Implement an Add Function**: Write a function named `addItem` that takes an `Item` object and adds it to the inventory. If an item with the same `id` already exists, the function should not add the item and instead log an error message.

3. **Implement an Update Quantity Function**: Write a function named `updateItemQuantity` that updates the quantity of a specific item identified by `id`. The function should accept the `id` and the new `quantity` as parameters. If the item does not exist, log an error message.

4. **Implement a Get Item Function**: Write a function named `getItem` that retrieves an item by `id` and prints its details. If the item does not exist, log an error message.

5. **Optional: Category Filtering Function**: Create a function named `filterItemsByCategory` that returns all items belonging to a specified category.

### Starter Code

```typescript
interface Item {
  // TODO: Define the Item interface
}

let inventory: Item[] = [];

function addItem(item: Item): void {
  // TODO: Implement the addItem function
}

function updateItemQuantity(id: string, quantity: number): void {
  // TODO: Implement the updateItemQuantity function
}

function getItem(id: string): void {
  // TODO: Implement the getItem function
}

function filterItemsByCategory(category: string): Item[] {
  // TODO: Implement the filterItemsByCategory function (Optional)
}
```

### Instructions

1. Start by defining the `Item` interface as per the requirements above.
2. Implement the `addItem`, `updateItemQuantity`, and `getItem` functions, ensuring they operate correctly according to the type definitions.
3. Pay attention to edge cases, such as adding an item that already exists or updating an item that is not in the inventory.
4. If you choose to implement the optional `filterItemsByCategory` function, ensure it accurately filters and returns items.
5. Test your system with various operations to ensure it functions correctly, including adding new items, updating quantities, retrieving items, and filtering by category.

### Evaluation Criteria

- **Correctness**: The system must accurately perform the required operations, adhering to the given specifications.
- **Type Safety**: Demonstrates effective use of TypeScript's type system to ensure type correctness throughout the application.
- **Code Organization**: Code should be logically structured, well-commented, and easy to understand.
- **Error Handling**: Proper handling and reporting of edge cases and errors in operations.

### Submission Guidelines

Prepare and submit a TypeScript file containing your implementation. Ensure your code is clean, well-organized, and includes comments explaining your logic.

---

This challenge is designed to assess your practical TypeScript skills, focusing on creating type-safe and efficient data manipulation functions. Good luck, and enjoy the process of building a simple yet functional inventory management system!

## TypeScript Coding Challenge: Generic Data Transformer

### Challenge Overview

In this advanced TypeScript coding challenge, you will create a generic data transformer utility. This utility will transform arrays of objects based on a set of transformation rules provided at runtime. The challenge is designed to test your understanding of advanced TypeScript features such as generics, type inference, and type guards, without relying on classes.

### Requirements

1. **Generic Transformation Function**: Implement a function named `transformData` that:

   - Accepts an array of objects (`items`) and a transformation rule set (`rules`).
   - Applies transformation rules to each item in the array.
   - Returns a new array of transformed objects, preserving the original array.

2. **Transformation Rules**:

   - A transformation rule is an object where each key specifies a property to be transformed, and its value is a function defining the transformation.
   - Transformation functions receive the original value of the property and return the transformed value.
   - The transformation should be applied to all objects in the input array that have the properties defined in the rules.

3. **Type Safety**:
   - The `transformData` function should be generic, supporting arrays of any object type.
   - Use TypeScript's type system to ensure that only properties existing on the input items can be specified in the rules.
   - The return type of `transformData` should reflect the transformed object type based on the provided rules.

### Starter Code

```typescript
type TransformationRules<T> = {
  [Property in keyof T]?: (value: T[Property]) => any;
};

function transformData<T>(items: T[], rules: TransformationRules<T>): T[] {
  // TODO: Implement the transformData function
  return items; // Placeholder return, update accordingly
}
```

### Example Usage

```typescript
const data = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Doe", age: 32 },
];

const rules = {
  name: (value: string) => value.toUpperCase(),
  age: (value: number) => value + 10,
};

const transformedData = transformData(data, rules);
console.log(transformedData);
// Expected output:
// [
//   { id: 1, name: "JOHN DOE", age: 38 },
//   { id: 2, name: "JANE DOE", age: 42 },
// ]
```

### Instructions

1. Implement the `transformData` function following the requirements. Pay special attention to the type safety of the function, ensuring it can work with any object types and enforce the transformation rules correctly.
2. Consider edge cases such as properties in the rules not existing on all objects in the input array or transformation functions returning a different type than the original property.
3. Test your utility with various data sets and transformation rules to ensure its versatility and robustness.

### Evaluation Criteria

- **Generics and Type Safety**: Effective use of generics to ensure type safety across different use cases.
- **Functionality**: The utility should accurately apply transformation rules to the input data and return correctly transformed data.
- **Code Quality**: The code should be clean, well-organized, and properly commented.
- **Edge Case Handling**: The utility should handle edge cases gracefully and not introduce type errors or inconsistencies.

### Submission

Submit your TypeScript file containing the implementation of the generic data transformer utility. Ensure your code is well-commented, explaining your approach and any TypeScript features utilized.

---

This coding challenge aims to test your ability to work with advanced TypeScript features to create flexible, type-safe utilities. Good luck!

## TypeScript Coding Challenge: Weather Dashboard Data Processor

### Challenge Overview

This coding challenge involves creating a data processing module for a weather dashboard application using TypeScript. You will work with interfaces, type guards, and generics to ensure type safety and functionality. The module will process raw weather data fetched from an API and present it in a structured format suitable for a front-end application. This challenge does not require the use of classes but focuses on advanced TypeScript features and data manipulation.

### Requirements

1. **Weather Data Interface**: Define an interface `WeatherData` that represents the raw weather data. It should include properties such as `temperature`, `humidity`, `windSpeed`, and `description`. Note that some properties might be optional or vary in type.

2. **Processed Data Interface**: Define an interface `ProcessedWeatherData` that represents the processed data. It should include properties like `avgTemperature`, `maxTemperature`, `minTemperature`, `detailedDescription`, and `isWindy` (boolean).

3. **Data Processor Function**: Implement a generic function `processWeatherData<T>` that takes an array of `T` (where `T` extends `WeatherData`) and returns an array of `ProcessedWeatherData`. This function should calculate averages, maximums, minimums, and other relevant processed data from the raw input.

4. **Type Guard for Windy Conditions**: Implement a type guard function `isWindy` to check if the `windSpeed` in a `WeatherData` object exceeds a certain threshold, indicating windy conditions.

5. **Filter Function**: Create a function `filterByDescription` that takes an array of `ProcessedWeatherData` and a string `description`, and returns all items that include the description string in their `detailedDescription`.

### Starter Code

```typescript
interface WeatherData {
  temperature: number | number[];
  humidity: number;
  windSpeed?: number;
  description?: string;
}

interface ProcessedWeatherData {
  avgTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  detailedDescription: string;
  isWindy: boolean;
}

function processWeatherData<T extends WeatherData>(
  data: T[]
): ProcessedWeatherData[] {
  // TODO: Implement the function
}

function isWindy(data: WeatherData, threshold: number = 25): boolean {
  // TODO: Implement the type guard
}

function filterByDescription(
  data: ProcessedWeatherData[],
  description: string
): ProcessedWeatherData[] {
  // TODO: Implement the function
}
```

### Instructions

1. Start by defining the `WeatherData` and `ProcessedWeatherData` interfaces based on the requirements.
2. Implement the `processWeatherData` function to process the raw weather data. Ensure calculations handle varying data types correctly, especially for temperature.
3. Write the `isWindy` type guard function to evaluate windy conditions based on `windSpeed`.
4. Complete the `filterByDescription` function to filter processed data based on the description.

### Evaluation Criteria

- **Type Safety**: Effective use of TypeScript's typing system to prevent common data processing errors.
- **Correctness**: The processing functions should accurately compute and transform the raw data into the desired format.
- **Edge Case Handling**: Your implementation should correctly handle optional properties and varying data types within the `WeatherData` interface.
- **Code Quality**: Code should be clear, concise, and well-commented.

### Submission

Please submit a TypeScript file (.ts) containing your solution. Ensure your submission is well-organized and includes comments explaining your logic, especially for the more complex parts of the data processing.

---

This coding challenge aims to test your ability to work with complex data structures and type systems in TypeScript, focusing on real-world scenarios you might encounter while developing data-driven applications. Good luck!

## Foo Bar

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/foo/bar
```
