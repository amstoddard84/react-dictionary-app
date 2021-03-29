import React from 'react';
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
        <a className="audio-link" href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <i class="fas fa-volume-up"></i> Hear it!
        </a><br></br>
        {props.phonetic.text}
        </div>
    );
    }