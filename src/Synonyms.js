import React from 'react';
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
        <section>
        <h3 className="synonyms">Synonyms</h3>
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
      </section>
    );
  } else {
    return null;
  }
}