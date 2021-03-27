import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
 
export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
    alert(`Fetching the definition for ${keyword} for you!`); 

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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