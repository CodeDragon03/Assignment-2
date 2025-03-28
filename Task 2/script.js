function alphabetizeString(str) {
  return str.split("").sort().join("");
}

let exampleString = "webmaster";
console.log("Alphabetized String:", alphabetizeString(exampleString));
