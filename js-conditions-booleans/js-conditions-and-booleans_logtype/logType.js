let data;

const undefinedExample = undefined;
const nullExample = null;
const numberExample = 365;
const notNumberExample = NaN;
const stringExample = "This is a string.";
const booleanExample = false;
const bigIntExample = 999999999999999n;
const functionExample = function () {};
const objectExample = {};
const arrayExample = [1, "hallo", true];

// change this to one of the example variables above see the different results
data = arrayExample;

// just to avoid scrolling through older log messages, when I tried a different example variable
console.clear();

// Log what typeof function returns for the example chosen above
const datatype = typeof data;
console.log("typeof:", datatype, "\n");

// Define what should be done for different scenarios / different data types
switch (true) {
  case datatype === "undefined":
    console.log("undefined!");
    break;
  case data === null:
    console.log("null!");
    break;
  //if datatype is number check ALSO if it is NaN (which is also dtype "number"), if yes --> log "not a number" if no --> check next conditions
  case datatype === "number" && isNaN(data):
    console.log("not a number!");
    break;
  case datatype === "number":
    console.log("number!");
    break;
  case datatype === "string":
    console.log("string!");
    break;
  case datatype === "boolean":
    console.log("boolean!");
    break;
  case datatype === "bigint":
    console.log("bigint!");
    break;
  case datatype === "function":
    console.log("function!");
    break;
  //first check if object is ALSO an array --> if yes log "array!" if not check next condition
  case datatype === "object" && Array.isArray(data):
    console.log("array!");
    break;
  case datatype === "object":
    console.log("object!");
    break;
  default:
    console.log("I have no idea!");
    break;
}
