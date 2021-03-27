import React, { useState } from "react";
import "./Dictionary.css";
 
export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
    alert(`Fetching the definition for ${keyword} for you!`); 
    }

    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }

    return ( 
        <div className="Dictionary">
        <section>
<h1 class="lookup-prompt">What word do you want to look up today?</h1>
<form onSubmit={search}>
    <input type="search" 
    onChange= {handleKeywordChange} />
</form>
<button class="btn btn-success">Define it!</button>
        </section>
        </div>
        );
}