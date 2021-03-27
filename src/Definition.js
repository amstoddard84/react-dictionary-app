import React from "react";
import "./App.css";

export default function Definition (props) {
    if (props.definition) {
    return ( 
        <div className="Definition">
        <section>
<h2>Here's what we found:</h2>
<h3>{props.definition.word}</h3>
{props.definition.meanings.map(function(meaning, index) {
return meaning.definition[0] 
})}
        </section>
        </div>);
    } else {
          return null;  
    }
}