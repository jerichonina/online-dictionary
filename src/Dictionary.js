import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword,setKeyword] =useState("");

    function search(event){
        event.preventDefault();
        alert("searching");
    }

    function processKeywordChange(event) {
        console.log(event.target.value);
    }

    return (
        <div className="Dictionary">
          <h1>
            Look up a word, grow your vocabulary. 
          </h1>
          <form onSubmit={search}>
            <input typ="search" onChange={processKeywordChange}/>
          </form>
        </div>
    );
}
