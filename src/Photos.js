import React from "react";

export default function photos(props) {
    if (props.photos) {
        return (
        <section className="Photos">
            {props.photos.map(function(photo,index){
                return 
                 <img src={photo.src.original} key={index} />;
            })}
        </section>);
    } else {
        return null;
    }
}