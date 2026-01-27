import { useState } from "react";

/* Source: react-state-codealong-med-kasper */
export const ClickCounterByMariePierreLessard = ()=> {
    const [clickCountByMariePierreLessard, setClickCountByMariePierreLessard] = useState(0);

    /* An event handler */
    function handleCountByMariePierreLessard() {
        setClickCountByMariePierreLessard(clickCountByMariePierreLessard + 1);
    };

    return (
        <fieldset>
            <legend>Prøv mig</legend>
            <input type="button" value="Click me!" onClick={handleCountByMariePierreLessard} />
            <p>Du har klikket på knappen {clickCountByMariePierreLessard} gange.</p>
            <input type="reset" onClick={() => {
                setClickCountByMariePierreLessard(0);
            }} />
        </fieldset>
    );
};