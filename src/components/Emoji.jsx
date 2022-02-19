import React from "react";

export function Emoji(props) {
    return (
        <div className="term">
      <dt>
      <img src={props.emoji}/>
        <span>{props.title}</span>
      </dt>
      <dd>{props.text}</dd>
    </div>
    );
}