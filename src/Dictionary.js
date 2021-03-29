import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
 
export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

// documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }

    return ( 
        <div className="Dictionary">
        <section>
<h1 class="lookup-prompt">Hey, you! Pick a word...any word.</h1>
<form onSubmit={search}>
    <input type="search" 
    onChange= {handleKeywordChange} />
</form>
<small className="suggestions">examples: pumpkin, coffee, hiking</small>
        </section>
          <Results results={results} />
        </div>
        );
}