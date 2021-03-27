import React from "react";
import "./App.css";

export default function Results (props) {
    if (props.definition) {
    return ( 
        <div className="Results">
        <section>
<h2>Here's what we found:</h2>
<h3>{props.definition.word}</h3>
{props.definition.meanings.map(function(meaning, index) {
return meaning.definitions[0].definition; 
})}
        </section>
        </div>);
    } else {
          return null;  
    }
}