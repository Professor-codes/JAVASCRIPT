// valueOf
let str = new String("Hello, World!");
console.log(str.valueOf()); // Output: Hello, World!

// toString
console.log(str.toString()); // Output: Hello, World!

// comparison between string primitive and string object
let strPrim = "Hello";
let strObj = new String("Hello");
console.log(strPrim == strObj);  // Output: true (loose equality)
console.log(strPrim === strObj); // Output: false (strict equality)
