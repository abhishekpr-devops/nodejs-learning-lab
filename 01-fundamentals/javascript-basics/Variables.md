In JavaScript, a variable is a named container used to store data in memory
### 1. How to Declare Variables

Modern JavaScript uses `let` and `const` (the older `var` is generally avoided):

  

- **`let`**: Used for values that can be reassigned.
    
      
    
- **`const`**: Used for constants whose values cannot be reassigned.
    
      
    
- **`var`**: The legacy keyword; avoided today because it lacks block-scoping.
    
      
    

### 2. Code Example

JavaScript

```
// A constant value that will not change
const country = "India";

// A variable that can change over time
let age = 25;
age = 26; // Reassignment works

// If declared without an initial value, it defaults to undefined
let score; 
console.log(score); // Output: undefined

console.log(country); // Output: India
console.log(age);     // Output: 26
```

(References:)

  

### 3. Key Rules & Conventions

- **Camel Case:** Multi-word names should follow camelCase (e.g., `firstName`, `interestRate`).
    
      
    
- **Valid Identifiers:** Names cannot be reserved keywords (like `if`, `let`), cannot start with a number, and cannot contain spaces or hyphens.
    
      
    
- **Dynamic Typing:** A variable can hold any data type (string, number, boolean, object) and change types at runtime.