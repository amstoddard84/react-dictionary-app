import React from "react";
import "./Dictionary.css";

export default function Dictionary () {
    return ( 
        <div className="Dictionary">
        <section>
<h1 class="lookup-prompt">What word do you want to look up today?</h1>
<form>
    <input type="search" />
</form>
<button class="btn btn-success">Define it!</button>
        </section>
        </div>
        );
}