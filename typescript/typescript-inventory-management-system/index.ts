interface Item {
  // TODO: Define the Item interface
  id: string;
  name: string;
  quantity: number;
  category: string;
}
let inventory: Item[] = [];

function addItem(item: Item): void {
  let itemId: number = Number(item.id);
  if (inventory.some((i) => i.id === itemId.toString())) {
    while (inventory.some((i) => i.id === itemId.toString())) {
      // increment the id until there is a free one that is not already taken
      itemId++;
    }
    console.log(
      `Id ${item.id} is already existing. Next free ID was assigned instead: ${itemId}`
    );
    item.id = itemId.toString();
  }
  inventory.push(item);
}

function updateItemQuantity(id: string, quantity: number): void {
  const itemToUpdate = inventory.find((item) => item.id === id);
  if (itemToUpdate) {
    itemToUpdate.quantity = quantity;
    console.log(`Quantity was updated to: ${itemToUpdate.quantity}.`);
  } else {
    console.log(
      `An item with the id ${id} could not be found in the inventory.`
    );
  }
}

function getItem(id: string): void {
  const requestedItem = inventory.find((item) => item.id === id);
  if (requestedItem) {
    console.log("This is the item you requested:\n\n", requestedItem);
  } else {
    console.log(`Item with id ${id}is not in the inventory.`);
  }
}

function filterItemsByCategory(category: string): Item[] {
  // TODO: Implement the filterItemsByCategory function (Optional)
}

addItem({
  id: "1",
  name: "Notebook",
  quantity: 1,
  category: "Electronics",
});

addItem({
  id: "2",
  name: "Guitar",
  quantity: 1,
  category: "Instruments",
});

addItem({
  id: "4",
  name: "Bass",
  quantity: 1,
  category: "Instruments",
});

// should get the id 3 because 3 is still free and 2 is already taken
addItem({
  id: "2",
  name: "Piano",
  quantity: 1,
  category: "Instruments",
});

// inventory after adding the items
console.log(inventory);

// quantity of the item with id 1 gets updated to 23
updateItemQuantity("2", 23);
console.log(inventory);

// shows item with id 2: name: Guitar
getItem("2");
