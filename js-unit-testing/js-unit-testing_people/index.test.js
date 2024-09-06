import {
  getFirstNames,
  getFullNames,
  getNameAndAge,
  getPeopleByAge,
  getPeopleNamesOlderThan,
  getPeopleByLastName,
  findPersonById,
  isAnyoneOlderThan,
  getFullNamesSortedByAge,
} from "./index.js";

const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

test("getFirstNames() returns an array with the first names", () => {
  const result = getFirstNames(people);
  expect(result).toEqual(["Jane", "John", "Max", "Erika", "Luke"]);
});

test('getFullNames() returns an array with full names as strings, e.g. "Jane Doe"', () => {
  const result = getFullNames(people);
  expect(result).toEqual([
    "Jane Doe",
    "John Doe",
    "Max Mustermann",
    "Erika Musterfrau",
    "Luke Skywalker",
  ]);
});

test('getNameAndAge() returns an array of formatted strings like this: "Skywalker (23)"', () => {
  const result = getNameAndAge(people);
  expect(result).toEqual([
    "Jane Doe (21)",
    "John Doe (18)",
    "Max Mustermann (32)",
    "Erika Musterfrau (38)",
    "Luke Skywalker (23)",
  ]);
});

test("getPeopleByAge() returns an array of people of a certain age", () => {
  const result1 = getPeopleByAge(people, 32);
  expect(result1).toEqual(["Max Mustermann (32)"]);

  const result2 = getPeopleByAge(people, 31);
  expect(result2).toEqual([]);
});

test('getPeopleNamesOlderThan() returns an array of people full names older than a certain age, e.g. "Luke Skywalker"', () => {
  const result = getPeopleNamesOlderThan(people, 30);
  expect(result).toEqual(["Max Mustermann (32)", "Erika Musterfrau (38)"]);
});

test("getPeopleByLastName() returns an array of people of a certain lastName", () => {
  const result = getPeopleByLastName(people, "Doe");
  expect(result).toEqual(["Jane Doe (21)", "John Doe (18)"]);
});

// Hint: use the array method find() for the implementation
test("findPersonById() returns the full object of a person", () => {
  const result = findPersonById(people, 4);
  expect(result).toEqual({
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  });
});

// Hint: use the array method some() for the implementation
test("isAnyoneOlderThan() returns true if any person is older than the given age", () => {
  const result = isAnyoneOlderThan(people, 37);
  expect(result).toBe(true);
});

test("isAnyoneOlderThan() returns false if no person is older than the given age", () => {
  const result = isAnyoneOlderThan(people, 38);
  expect(result).toBe(false);
});

test("getFullNamesSortedByAge() returns an array of full names sorted by age", () => {
  const result = getFullNamesSortedByAge(people);
  expect(result).toEqual([
    "John Doe",
    "Jane Doe",
    "Luke Skywalker",
    "Max Mustermann",
    "Erika Musterfrau",
  ]);
});
