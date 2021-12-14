import React from "react";

function CharacterInfo({name , status, species , image}){
     return (
      <div>
          <img src={image} alt=""/>
          <h1> {name} </h1>
          <p>{status}</p>
          <p>{species}</p>
      </div>

     );
}
export default CharacterInfo;