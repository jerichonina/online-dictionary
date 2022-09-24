import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      console.log(apiUrl);
      axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function processKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded){
    return (
      <div className="Dictionary">
        <h1>Look up a word, grow your vocabulary.</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search a word..." onChange={processKeywordChange} />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
