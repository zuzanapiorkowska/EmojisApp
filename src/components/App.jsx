import React from "react";
import { emojipedia } from "./emojipedia";
import { Emoji } from "./Emoji";

function createEmojis(emojipediaEmoji){
    return (
        <Emoji 
        key={emojipediaEmoji.id}
        title={emojipediaEmoji.name}
        emoji={emojipediaEmoji.src}
        text={emojipediaEmoji.description}
        />
    );
}

export function App() {
    return (
        <dl className="dictionary">
        {emojipedia.map(createEmojis)}
        </dl>
    );
}