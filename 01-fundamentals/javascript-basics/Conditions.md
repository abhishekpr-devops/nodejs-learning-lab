

Conditions evaluate expressions to boolean values (`true` or `false`) to control execution flow[cite: 1, 2].

  

- **Condition Structures**:
    
      
    - `if / else if / else`: Executes blocks based on condition matches.
        
          
        
    - `switch`: Evaluates an expression against multiple discrete `case` values.
        
          
        
    - `Ternary (?:)`: Shorthand inline conditional operator (`condition ? exprIfTrue : exprIfFalse`).
        
          
        

JavaScript

```
const score = 85;

// if - else if - else
if (score >= 90) {
  console.log("Grade A");[cite: 1]
} else if (score >= 75) {
  console.log("Grade B");[cite: 1]
} else {
  console.log("Needs Improvement");
}

// Ternary Operator
const status = score >= 50 ? "Passed" : "Failed";
console.log(status); // Output: Passed
```

- **Key Rules & Behaviors**:
    
      
    - **Strict Equality (`===`)**: Always prefer `===` and `!==` over `==` to prevent unexpected type coercion.
        
          
        
    - **Logical Operators**: Combine conditions with `&&` (AND), `||` (OR), and `!` (NOT).
        
          