
let empty = {};                             // An object with no properties
let point = { x: 0, y: 0 };                 // Two numeric properties
let p2 = { x: point.x, y: point.y+1 };      // More complex values
let book = {                                
    "main title": "JavaScript",             // These property names include spaces,
    "sub-title": "The Definitive Guide",    // and hyphens, so use string literals.
    for: "all audiences",                   // for is reserved, but no quotes.
    author: {                               // The value of this property is
        firstname: "David",                 // itself an object
        surname: "Flanagan"
    }
};


/**
 * If using square brackets, the value within the brackets must be an expression 
 * that evaluates to a string that contains the desired property name: 
 */
let Author = book.author;
let Name = Author.surname;
let Title = book["main title"];
let Edition = book.edition = 7;
console.log(Author, Name, Title, Edition);

