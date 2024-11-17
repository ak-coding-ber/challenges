# Address Book Application

## Challenge Overview

In this coding challenge, you will leverage TypeScript's static typing system to create a simple, type-safe address book application. This challenge is designed to reinforce the basics of TypeScript, including working with types, interfaces, and arrays. Your application will allow users to add, remove, and search for contacts in an address book.

## Requirements

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

## Instructions

1. Begin by defining the `Contact` interface according to the requirements specified above.
2. Implement the `addContact`, `removeContact`, and `searchContacts` functions, making sure to adhere to the type definitions you've created.
3. Ensure your functions handle edge cases, such as attempting to add a contact with an existing `id` or trying to remove a contact that doesn't exist.
4. Test your application by creating a few contacts, removing a contact, and searching for contacts by various attributes.

## Evaluation Criteria

- **Type Safety**: Proper use of TypeScript features to enforce type constraints throughout the application.
- **Functionality**: The application should correctly add, remove, and search for contacts as specified.
- **Code Quality**: The code should be well-organized, properly commented, and easy to read.
- **Edge Case Handling**: The application should gracefully handle and report errors or invalid operations.

## Submission

Submit your TypeScript file containing the implementation of the address book application. Ensure your code is well-commented to explain your logic and decisions.

---

This coding challenge is designed to test your understanding of TypeScript's basic features and how they can be applied to solve common programming tasks. Good luck!
