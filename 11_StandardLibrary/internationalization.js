
// A basic comparator for sorting in the user's locale.
// Never sort human-readable strings
// without passing something like this:
const collator = new Intl.Collator().compare;
let data = ["a", "z", "A", "Z"];
data.sort(collator);    // => ['a','A','z','Z']
console.log(data);

// Filenames often include numbers, so we should sort those specially
const filenameOrder = new Intl.Collator(
    undefined, {numeric: true}).compare;
data = ["page10", "pageXI", "page9"];
data.sort(filenameOrder);
console.log(data);

// Find all string that loosely match a target string
const fuzzyMatcher = new Intl.Collator(undefined, {
    sensitivity: "base",
    ignorePunctuation: true
}).compare;
data = ["food", "fool", "Føø Bar"];
const result = data.findIndex(s => fuzzyMatcher(s, "foobar") === 0);   // => 2
console.log(result);

