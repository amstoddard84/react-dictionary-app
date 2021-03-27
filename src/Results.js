import React from "react";
import Meaning from "./Meaning";
import "./App.css";

export default function Results(props) {
    if (props.results) {
    return ( 
        <div className="Results">
        <section>
<h2>Here's what we found:</h2>
<h3>{props.results.word}</h3>
{props.results.meanings.map(function (meaning, index) {
return (
<div key={index}>
<Meaning meaning={meaning} />
    </div>
);
})}
        </section>
        </div>);
    } else {
          return null;  
    }
}