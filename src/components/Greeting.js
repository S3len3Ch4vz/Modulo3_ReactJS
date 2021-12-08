import React  from "react";

const capitalizeWord = (word) => {
    if(!word){
        return "";
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
};


function Greeting({name, lastName=""}) {
    const _name = capitalizeWord(name)
    const _lastName = capitalizeWord(lastName)

    return (<div> 
        <h1> HOLA {_name}{_lastName} </h1>
        </div>
        
    );
}


export default Greeting;