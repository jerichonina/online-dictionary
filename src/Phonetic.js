import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
      <div>
        <div className="phonetic">
          <audio controls src={props.phonetic.audio}></audio>
          <span className="text">{props.phonetic.text}</span>
        </div>
      </div>
    );
}