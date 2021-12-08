import React  from "react";
/* ------------------------------------ Ejercicio ----------------------------------- 
Input 
valor a 
valor b 
operador 

Ejemplo: 
1
2 
suma 

Output
3
*/




function Calculator({value1, value2, operator=""}) {
    if (!Number.isInteger(value1)){
        return (<div> 
            <p> El valor A no es un número</p>
             </div>
             
         ); 
    }
    if (!Number.isInteger(value2)) {
        return (<div> 
            <p>  El valor B no es un número</p>
             </div>
             
         );
    }
    let result = 0;
    switch (operator) {
        case "suma":
           result = value1 + value2
            break;
        case "resta":
            result = value1 - value2
           break;
        case "multiplicacion":
            result = value1 * value2
        default:
            break;
    }
    return 
  
    
}

export default Calculator; 
