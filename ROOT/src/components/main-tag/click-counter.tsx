import { useState } from "react";

/* Source: react-state-codealong-med-kasper */
export const ClickCounterByMariePierreLessard = ()=> {
    const [clickCountByMariePierreLessard, setClickCountByMariePierreLessard] = useState(0);
    console.log("Count: ", clickCountByMariePierreLessard);

    /* An event handler */
    function handleCountByMariePierreLessard() {
        setClickCountByMariePierreLessard(clickCountByMariePierreLessard + 1);
    };

    return (
        <>
            <input type="text" onChange={(event) => {
                console.log(event.target.value);
            }} />
            <button type="button" onClick={handleCountByMariePierreLessard}>Click me!</button>
            <p>Count: {clickCountByMariePierreLessard}</p>
        </>
    );
};