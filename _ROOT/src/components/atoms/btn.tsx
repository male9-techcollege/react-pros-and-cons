import { useCallback } from 'react';
import type { ButtonHTMLAttributes } from "react";
import type { Dispatch, SetStateAction } from "react";

/* **Opgave: Lav en dynamisk knap** (sektion 2.7, opgave 4)
Opgavebeskrivelse:
FÆRDIG: Lav et Button component der tager imod følgende props:
FÆRDIG - theme (light / dark)
FÆRDIG - action (en funktion der kaldes når knappen trykkes på)
FÆRDIG - text (den tekst der skal vises inde i knappen)
FÆRDIG - size (small, medium, large)
FÆRDIG: Til slut skal du rendere tre forskellige knapper der kalder tre forskellige alerts når de klikkes på. 

Til læreren: 
For at gøre mit komponent mere genbrugelig, inkluderede jeg begge children og en prop med typen "string", 
som hedder "text" i min interface. 
Det giver flere muligheder, da children giver muligheden til at tilføje HTML-elementer, ikke kun tekst.
*/
/* Sources used:
- ** react-intro-mc-med-kasper: covers pretty much everything needed here: it does include a button component, 
  as well as the use of concatenation for styles (I found a source that shows how this can also be used with CSS/SCSS only,
  not just when one combines Tailwind and CSS/SCSS: 
  https://medium.com/geekculture/using-reacts-state-to-update-css-dynamically-c9b45570340c) 
- react-component-codealong-med-kasper: Interface with prop for inline styling (style= instead of className=)
- react-hook-repetition: component that includes or imports a function and useState (slider)
- react-modal-codealong-med-kasper: modal with wrapper (in div) and burger menu (useState and useEffect with dependency array, 
function to toggle a boolean value and conditional expression inside of return())
- react-router-codealong-med-kasper (how to describe the type of action with Dispatch<A>)

Svar fra Kasper:
Funktioner skal i filer til helper (utilities) funktioner, hvis en knap skal modtage forskellige funktioner som prop. 
Det er kun tilstand (states), som skal blive så tæt på komponentet som muligt. 
*/

interface btnInterfaceByMariePierreLessard {
    type: string;
    text?: string;
    children?: React.ReactNode;
    theme: boolean;
    /* Source for way to fold regions in .jsx files: https://stackoverflow.com/questions/58882591/region-for-jsx */
    // #region Research and notes about reason for my choice
    /* Research on what Dispatch<SetStateAction<number>> means:
    1. SetStateAction<S> indicates the type of the state created with the useState hook according to file
       node_modules/@types/react/ts5.0/index.d.ts
       S is a placeholder for number, string, boolean, a function, etc.
    2. Dispatch<A> indicates the type of an action performed by a void function, as explained by k.tten on StackOverflow:
       "Dispatch takes an action as a parameter and returns nothing meaningful (void). There are multiple types of actions, 
       and one of them is SetStateAction.
       Remember that useState can take a new state, or a function that takes the previous state and returns the new state.
       So useState's type is actually:
       type UseState<S> = (action: S | ((prevState: S) => S)) => void;"
       https://stackoverflow.com/questions/71324797/react-typescript-what-does-dispatchsetstateactionboolean-stand-for 

       As a consequence, the following type description means that setCount is the action performed by a setter function
       that updates a numeric state.

       Location of course notes for the action prop and how to define its type depending on the case:
       - react-intro-mc-med-kasper (no parameter)
       - react-modal-codealong-med-kasper (with boolean value as parameter)
       - react-router-codealong-med-kasper (how to describe the type of action with Dispatch<A>)
       Note: using 
       (isOpen: number) => void 
       or 
       (isOpen: boolean) => void 
       appears to be the equivalent of using 
       Dispatch<SetStateAction<number>>
       or
       Dispatch<SetStateAction<boolean>>
       based on the sources above.
       However, is it completely equivalent? If one solution is superior to the other, I assume that it is 
       the type that is pre-defined in React, so it might be best to use that one. 
    */
    // #endregion
    /* I chose the prop name toggleAction instead of setTheme or sth like that in order to make the interface
    more reusable. In a proper library component, other types of action could be added to the interface 
    in order to make the button component more universal. This one is just to toggle a boolean value,
    as its type indicates. */
    toggleAction: Dispatch<SetStateAction<boolean>>;
    size?: "small" | "medium" | "large";
};

type extendedGenericInterfaceForBtnByMariePierreLessard = ButtonHTMLAttributes<HTMLButtonElement>
    & btnInterfaceByMariePierreLessard;

/* Note: this assignment does not require me to make this button universal. It only has to toggle the colour mode (1 action). 
The prop called theme won't work in every context. */
export const BtnComponentByMariePierreLessard = (
    { type, text, children, theme, toggleAction, size, ...rest }:
        extendedGenericInterfaceForBtnByMariePierreLessard) => {

    // #region Sources and various notes
    /* Source for the use of ! in order to toggle the boolean value created with useState:
    "How to pass props from child to parent component in React"
    by Bruno
    https://dev.to/bcostaaa01/how-to-pass-props-from-child-to-parent-component-in-react-1ci4 
     
    When the following function was in App(), until I used useCallback, there was an infinite loop when I accessed the page. 
    According to the sources below, this has to do with how the setter's callback in a child component is re-rendered every time 
    the parent is re-rendered, and this can cause problems like an infinite loop on top of the fact that the state
    controlled by the setter is reset by the re-rendering (as we learned in class) unless the information about the state 
    is stored somewhere. That is what useCallback does.
    
    const toggleColourModeByMariePierreLessard = useCallback(() => {
        setColourModeByMariePierreLessard(!colourModeByMariePierreLessard);
        console.log(colourModeByMariePierreLessard);
    }, [colourModeByMariePierreLessard]);
    
    Sources for the use of the useCallback hook: 
    
    "use the useCallback hook, which makes sure that the function you pass as a callback to the child component remains stable 
    across renders, preventing unnecessary re-renders and improving performance."
    https://dev.to/bcostaaa01/how-to-pass-props-from-child-to-parent-component-in-react-1ci4
    
    I probably encountered the 1st problem described in the citation below when I did react-joke-fetcher, even though the fix
    was not to use the useCallback hook.
    "Stale closures
    Callback functions can sometimes capture outdated values from their previous value, leading to bugs that are difficult 
    to track and fix. (...)
    useCallback() is a part of the built-in React Hooks that optimizes the performance of React applications by preventing 
    unnecessary re-renders of components. It achieves this through memoizing callback functions, ensuring that they are only 
    recreated when the dependency array changes.
    Syntax and parameters (...)
    The useCallback() Hook takes two arguments:
    1. Callback function: This is the first argument, and it represents the function to memorize (remember).
    2. Dependency array: This second argument is an array of dependencies that determine when the callback function should be 
    recreated. If any value in this array changes between renders, the callback function is recreated. (...)
    This means that as long as the dependencies don't change, the exact same function instance is returned every time 
    the component re-renders. (...)
    When to use useCallback()
    Here are some scenarios where using useCallback() is particularly beneficial:
    - Optimizing performance in lists: When rendering a list of items, you might need to pass a callback to each item. Using 
    useCallback() ensures that the same callback instance is passed to each item, preventing unnecessary re-renders.
    - When a callback is a dependency in useEffect(): Use useCallback() when the callback is a dependency in a useEffect Hook 
    to prevent the effect from running unnecessarily.
    - When working with custom Hooks: Use useCallback() to ensure consistent function references when creating custom Hooks 
    that return callback functions, especially if these other functions will be used as dependencies in effects.
    - Preventing stale closures: When a callback function depends on state or props, using useCallback() helps to ensure 
    the function always has the latest values.
    - Passing callbacks to child components: If the function references change, the child components may re-render unnecessarily. 
    useCallback() helps prevent this by memoizing the function, ensuring it only changes when its dependencies change."
    https://hygraph.com/blog/react-usecallback-a-complete-guide
    */
    /* Experiments to understand puzzling behaviour:
    
    This button works perfectly fine: it changes the colour mode every time, also on the first click on the button.
    However, the boolean value printed with the following is not the one that I expected. 
    
    When this is in the scope of the button component, I get the following result whether or not I use the useCallback hook:
    the first time I click on the button, the boolean value is false (I can see that printed in the console). The second time,
    it is true. Why? Indeed, the toggle action (toggleAction(!theme);) is supposed to turn the initial falsy value of theme 
    into a truthy value. 
         
    Tests:
    1. If I comment toggleAction(!theme); out, false is still printed to the console on the first click on the button.
       Since there is no toggle function, subsequent clicks also print the word false. This shows that the value of the theme
       argument, passed from App() is the initial false value defined by useState in App().
    2. If I remove  theme  from the dependency array of useCallback, the toggle stops working. 
       Printed text is "Boolean value: false" at each click.
    3. Probable reason: this doesn't log the value of theme after it got changed by the setter. It logs the initial value,
       even though the line 
       console.log("Boolean value: ", theme);
       comes after it.
    */
    // #endregion Sources and various notes 
    /* Giving the type any is a way to avoid extended the interface with non-nullable props.
    Since this part of the exercise is rather artificial, it wasn't worth bothering with a more complex logic. */
    const toggleColourModeByMariePierreLessard = useCallback((size: any) => {
        toggleAction(!theme);
        /* This does print boolean to console: 
        console.log("Boolean value: ", theme);
        */
        switch (size) {
            case "small":
                alert("Du valgte størrelse S.");
                break;
            case "medium":
                alert("Du valgte størrelse M.");
                break;
            case "large":
                alert("Du valgte størrelse L.");
                break;
        };
    }, [theme]);

    /* Reminder: the parentheses at the end of the called function expression need to be there! */
    return (
        <button type={type} onClick={() => toggleColourModeByMariePierreLessard(size)} {...rest} >
            {text}
            {children}
        </button>
    );
};
