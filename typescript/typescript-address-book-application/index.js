"use strict";
let addressBook = [];
// for the purpose of practicing TypeScript I choose a very simple approach for temporary id management here
// I am aware that there is more efficient ways of automatic id assignment and storage
let idCounter = 1;
function addContact(contact) {
    // make sure that no contact id is being used twice
    if (addressBook.some((entry) => entry.id === contact.id)) {
        // approach for small datasets and little amount of erased entries:
        // increase idCount until an id is found that is not yet in the contacts array
        while (addressBook.some((entry) => entry.id === idCounter)) {
            idCounter++;
        }
        console.log(`Contact id is already existing. Assigning new id:${idCounter}`);
        contact.id = idCounter;
    }
    addressBook.push(contact);
}
function removeContact(id) {
    // check if contact id is existing in the array
    if (addressBook.some((contact) => contact.id === id)) {
        addressBook = addressBook.filter((contact) => contact.id !== id);
    }
    else {
        console.log("ID is not in list of contacts.");
    }
}
function searchContacts(query) {
    // if no search string should be provided at all: return all contacts
    if (!query)
        return addressBook;
    const queryNormalized = query.trim().toLowerCase();
    return addressBook.filter((contact) => {
        return (contact.name.trim().toLowerCase().includes(queryNormalized) ||
            contact.email.trim().toLowerCase().includes(queryNormalized) ||
            (contact.phone && contact.phone.trim().includes(queryNormalized)) //check first if property phone exists
        );
    });
}
addContact({
    id: idCounter++,
    name: "Test Person",
    email: "tp@gmail.com",
    phone: "373-603-1485",
});
addContact({
    id: idCounter++,
    name: "Geralt of Rivia",
    email: "gov@gmail.com",
    phone: "457-547-2459",
});
addContact({
    id: idCounter++,
    name: "Yennefer of Vengerberg",
    email: "yov@example.com",
    phone: "226-494-7593",
});
addContact({
    id: idCounter++,
    name: "Cirilla Fiona Elen Riannon",
    email: "ciri@freenet.de",
    phone: "479-225-3786",
});
console.log("addressBook after adding entries", addressBook);
// remove contact with id 1
removeContact(1);
console.log("address book after deletion of first entry with id 1:", addressBook);
/* Test search function - no string - result should show all entries of the address book
note: this of course would also triggers an error inside TypeScript, because 1 argument of type string is expected*/
// console.log("Search result for missing string", searchContacts());
// Test search function - empty string - result should show all entries of the address book
console.log("Search result for empty string", searchContacts(""));
// Test search function - name - result should be Yennever of Vengerberg
console.log("Search result for 'yen'", searchContacts("yen"));
// Test search function - email - result should be Geralt of Rivia
console.log("Search result for 'gmail'", searchContacts("gmail"));
// Test search function - phone number - result should be Cirilla Fiona Elen Riannon
console.log("Search result for '225'", searchContacts("225"));
