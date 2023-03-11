import React, { useState } from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false);

    const toggle = () => {
        setIsShown((state) => !state);
    };

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{isShown && props.punchline}</p>
            <button onClick={toggle}>
                {isShown ? "Hide" : "Show"} punchline
            </button>
            <hr />
        </div>
    );
}
