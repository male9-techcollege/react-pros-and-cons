import { useState } from "react";

/* #region Assignment 1, sektion 2.7 */
interface greetingInterfaceByMariePierreLessard {
    id: number;
    name: string;
};

export const GreetingByMariePierreLessard = (props: greetingInterfaceByMariePierreLessard) => {
    return (
        <p>Hej, {props.name}! Dit identifikationsnummer er {props.id}.</p>
    );
};
/* #endregion */

/* #region Assignment 1, sektion 3.1 */
/* Source: react-state-codealong-med-kasper */
export const GreetingFieldsetByMariePierreLessard = () => {
    const [userNameByMariePierreLessard, setUserNameByMariePierreLessard] = useState<string>("(indtast et navn)");

    /* In vanilla JS, this would be done with:
    inputElement.addEventListener("change", (event)=> {
        let value=event.target.value;
    });
    */

    /* "When a component is initialized, React will use whatever initial value is passed as an argument in useState(). But, this means when the component is re-rendered using setState(), React will use the previous state to update the component!
    When needing to update your state, you'll often need to call upon the current state to calculate the value of what you want set next. In this case, it is best practice to update state with a callback function."
    https://dev.to/livelong_ponder/arrow-functions-and-state-in-react-2ama 
    NOTES: 
    - useState() is not the setter function. 
    - My setter function is called setUserNameByMariePierreLessard, not setState. 
    - In this exercise, I didn't have to indicate the past value. It would be necessary if this was a mathematical equation,
    for instance (previousState + 1). */
    /* Kasper said: 
    using value={userNameByMariePierreLessard} gives something called a controlled input;
    A controlled input exists when the value inside of the input is always the same as the current state. 
    There is reciprocity: 
    - manually changing the value of the input changes the state, 
    - and programmatically changing the state updates the displayed value in the input.
    
    I used the controlled input to make sure that the value shown by the input was reset by clicking on the Reset button. 
    Otherwise, the reset buttons updates the text in the paragraph, but not the value displayed in the input!
    */
    return (
            <fieldset>
                <legend>Prøv mig</legend>
                    <input type="text" onChange={(event) => {
                        console.log(event.target.value);
                        setUserNameByMariePierreLessard(event.target.value);
                    }} value={userNameByMariePierreLessard} />
                    <p>Send en hilsen til {userNameByMariePierreLessard}!</p>
                    <input type="reset" onClick={() => {
                        setUserNameByMariePierreLessard("(indtast et navn)");
                    }} />
            </fieldset>
    );
};
/* #endregion */
