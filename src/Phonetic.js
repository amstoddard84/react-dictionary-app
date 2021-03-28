import React from 'react';
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
        <a className="audio-link" href={props.phonetic.audio} target="_blank">
            Hear pronunciation
        </a>
        {props.phonetic.text}
        </div>
    );
    }