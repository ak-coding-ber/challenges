export function getAnimal(animalPluralName) {
  if (animalPluralName === undefined) {
    return `I do not like animals at all!`;
  } else if (animalPluralName === "cats") {
    return `I totally love ${animalPluralName}!`;
  } else {
    return `I like ${animalPluralName}!`;
  }
}
