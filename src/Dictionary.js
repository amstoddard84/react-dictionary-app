import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
 
export default function Dictionary(props) {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

// documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001ca6bbc567d904d9281d7580b548ddfb7";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
   let headers = { Authorization: `Bearer ${pexelsApiKey}` };
     axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }


    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }

    return ( 
        <div className="Dictionary">
        <section>
<h1 class="lookup-prompt">Hey, there! Pick a word...any word.</h1>
<form onSubmit={search}>
    <input type="search" 
    onChange= {handleKeywordChange} />
</form>
<small className="suggestions">examples: pumpkin, coffee, hiking</small>
        </section>
          <Results results={results} />
          <Photos photos={photos} />
        </div>
        );
}