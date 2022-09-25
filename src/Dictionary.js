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

  function handlePexelsResponse(response) {
    console.log(response.data);
  }

  function search() {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      console.log(apiUrl);
      axios.get(apiUrl).then(handleResponse);

      let pexelsApiKey =
        "563492ad6f91700001000001c2df34c93e214fd3b9c52c239dd6551c";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
      let headers = { Authorization: `Bearer ${pexelsApiKey}`};
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <section>
        <h1>Look up a word, grow your vocabulary.</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Search a word..." onChange={processKeywordChange} />
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
