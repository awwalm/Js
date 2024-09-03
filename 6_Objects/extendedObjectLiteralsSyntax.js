
/**
 * Sometimes you need to create an object with a specific property,
 * but the name of that property is not a compile-time constant
 * that you can type literally in your source code.
 * Instead, the property name you need is stored in a variable
 * or is the return value of a function that you invoke.
 * You can’t use a basic object literal for this kind of property.
 * Instead, you have to create an object and then add the desired properties as an extra step:
 */
let computedPropertyNames = () => {
  const PROPERTY_NAME = "p1";
  function computePropertyName() {
    return "p" + 2;
  }
  let o = {};
  o[PROPERTY_NAME] = 1;
  o[computePropertyName()] = 2;
  console.log(o.p1 + o.p2); // 3
};
computedPropertyNames();


/**
 * The computed property syntax enables one other very important object literal feature.
 * In ES6 and later, property names can be strings or symbols.
 * If you assign a symbol to a variable or constant, then you can use that symbol
 * as a property name using the computed property syntax:
 */
let symbolsAsPropertyNames = () => {
  const extension = Symbol("my extension symbol");
  let o = {
    [extension]: {
      /* extension data stored in this object */
    },
  };
  o[extension].x = 0; // This won't conflict with other properties of o
};


/**
 * In ES2018 and later, you can copy the properties of an existing object
 * into a new object using the “spread operator” ... inside an object literal:
 */
let spreadOperator = () => {
  let position = { x: 0, y: 0 };
  let dimensions = { width: 100, height: 75 };
  let rect = { ...position, ...dimensions };
  const perimeter = rect.x + rect.y + rect.width + rect.height; // 175
  console.log(perimeter);
};
spreadOperator();


/**
 * When a function is defined as a property of an object, we call that function a method.
 * Prior to ES6, you would define a method in an object literal using a function
 * definition expression just as you would define any other property of an object:
 */
let shortHandMethods = () => {
  let square = {
    area: function () {
      return this.side * this.side;
    },
    side: 10,
  };
  console.log(square.area()); // 100

  const METHOD_NAME = "m";
  const symbol = Symbol();
  let weirdMethods = {
    "method With Spaces"(x) {
      return x + 1;
    },
    [METHOD_NAME](x) {
      return x + 2;
    },
    [symbol](x) {
      return x + 3;
    },
  };
  console.log(weirdMethods["method With Spaces"](1)); // => 2
  console.log(weirdMethods[METHOD_NAME](1)); // => 3
  console.log(weirdMethods[symbol](1)); // => 4
};
shortHandMethods();


/**
 * Accessor properties can be defined with an extension to the
 * object literal syntax (unlike the other ES6 extensions we’ve seen here,
 * getters and setters were introduced in ES5):
 */
let accessor = () => {
  let p = {
    // x and y are regualr read-write data properties.
    x: 1.0,
    y: 1.0,

    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() {
      return Math.hypot(this.x, this.y);
    },
    set r(newvalue) {
      let oldvalue = Math.hypot(this.x, this.y);
      let ratio = newvalue / oldvalue;
      this.x *= ratio;
      this.y *= ratio;
    },

    // theta is a read-only accessor property with getter only.
    get theta() {
      return Math.atan(this.y, this.x);
    },
  };
  console.log(
    p.r, // => Math.SQRT2
    p.theta
  ); // => Math.PI/4
};
accessor();


/**
 * Other reasons to use accessor properties include sanity checking of 
 * property writes and returning different values on each property read:
 */
let propertyCheck = () => {
    // This object generates strictly increasing serial numbers
    const serialnum = {
        // This data property holds the next serial number.
        // The _ in the property name hints that it is for internal use only.
        _n: 0,

        // Return the current value and increment it
        get next() { return this._n++ },

        // Set a new value of n, but only if it is larger than current
        set next(n) {
            if (n > this._n) this._n = n;
            else throw new Error();
        }
    };
    serialnum.next = 10;
    serialnum.next;
    serialnum.next;

}
