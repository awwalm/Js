
const repetition = (() => {
    let r = /\d{2,4}/;  // Match between two and four digits
    r = /\w{3}\d?/;     // Match exactly 3 word characters and an optional digit
    r = /\s+java\s+/;   // Match "java" with one or more spaces before and after
    r = /[^(]*/;        // Matc zero or more characters that are not open parens
})();


const stringMatchingMethods = (() => {
     // search() method
     console.log(
        "JavaScript".search(/script/ui),        // => 4
        "Python".search(/search/ui),            // => -1
    );
    // replace()
    console.log(
        "python, jAvAsCriPT, guava".replace(
            /javascript/gi, "JavaScript"),
    );
    let s = "15 times 15 is 255";
    console.log(s.replace(
        /\d+/gu, n => parseInt(n).toString(16)   // => "f times f is e1"
    ));
    // match()
    console.log(
        "7 plus 8 equals 15".match(/\d+/g)      // => ["7","8","15"]
    );

})();


const namedCaptureGroup = (() => {
    // A very simple URL parsing RegExp
    let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
    let text = "Visit my blog at http://wwww.example.com/~david";
    let match = text.match(url);
    let fullurl, protocol, host, path;
    if (match != null) {
        fullurl = match[0];
        protocol = match[1];
        host = match[2];
        path = match[3];
        console.log({
            Address: fullurl,
            Protocol: protocol,
            Host: host,
            Path: path,
        });
    }
})();


const namedCaptureGroups2 = (() => {
    // A more sophisticated URL matching
    let url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
    let text = "Visit my blog at http://www.example.com/~david";
    let match = text.match(url);
    console.log({address: match[0]});
    console.log({input: match.input});
    console.log({index: match.index});
    console.log({protocol: match.groups.protocol});
    console.log({host: match.groups.host});
    console.log({path: match.groups.path});
})();


const lastIndexMethod = (() => {
    let vowel = /[aeiou]/y;             // Sticky vowel match
    console.log("test".match(vowel));   // => null: "test" does not begin with vowel
    vowel.lastIndex = 1;                // Specify different match position
    console.log("test".match(vowel)[0]);// => e
    console.log(vowel.lastIndex);       // => 2: Auto-updated next matching index
    "test".match(vowel);                // "s" is not a vowel
    console.log(vowel.lastIndex);       // => 0; Gets reset after failed match
})();


const matchAllMethod = (() => {
    // One or more Unicode alphabetic characters between word boundaries
    const words = /\b\p{Alphabetic}+\b/gu;  // \p now supported in Firefox >=78
    const text = "This is a naive test of the matchAll() method.";
    for (let word of text.matchAll(words)) {
        console.log(`Found '${word[0]}' at index ${word.index}.`);
    }
})();


const splitMethod = (() => {
    console.log("123,456,789".split(","));
    console.log("1, 2, 3,\n4, 5".split(/\s*,\s*/));
    const htmlTag = /<([^>]+)>/;
    console.log("Testing<br/>1,2,3".split(htmlTag));
})();


const regexpClass = (() => {
    // Find all 5 digit numbers in a string. Note the double \\ in this case.
    let zipcode = new RegExp("\\d{5}", "g");
    // You can also pass a RegExp object
    let exactMatch = /JavaScript/;
    let caseInsensitive = new RegExp(exactMatch, "i");
    console.log("jAvAsCriPT".match(caseInsensitive));
})();


const execMethod = (() => {
    // For a newly created RegExp object, lastIndex is 0, 
    // and the search begins at the start of the string. 
    // But each time exec() successfully finds a match, 
    // it updates the lastIndex property to the index of 
    // the character immediately after the matched text. 
    // If exec() fails to find a match, it resets lastIndex to 0.
    let pattern = /Java/g;
    let text = "JavaScript > Java";
    let match;
    while ((match = pattern.exec(text)) !== null) {
        console.log(`Matched ${match[0]} at ${match.index}`);
        console.log(`Next search begins at ${pattern.lastIndex}`);
    }
})();

