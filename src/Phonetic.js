import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
      <div className="phonetics">
        <audio controls src={props.phonetic.audio}></audio> {" "}
        <span>{props.phonetic.text}</span>
      </div>
    );
}