
In JavaScript, data types define the nature and structure of values stored in memory.

  

- **Two Categories**:
    
      
    - **Primitives (Value Types)**: Stored directly by value; immutable (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`).
        
          
        
    - **Reference Types**: Stored as references pointing to memory locations in the heap (`object`, `array`, `function`).
        
          
        

JavaScript

```
// Primitives
const username = "Mosh";      // string
const age = 30;              // number (all numeric values are 'number')
const isActive = true;       // boolean
let unassigned;              // undefined (default when declared without a value)[cite: 1, 2]
const empty = null;          // null (explicitly cleared/empty value)[cite: 1, 2]

// Check type with typeof operator
console.log(typeof age);     // Output: number
console.log(typeof empty);   // Output: object (historical JS quirk)
```

- **Key Rules & Behaviors**:
    
      
    - **Dynamic Typing**: Types are determined automatically at runtime and variables can change types upon reassignment.
        
          
        
    - **No Float vs. Integer**: All numbers fall under the single primitive type `number`.