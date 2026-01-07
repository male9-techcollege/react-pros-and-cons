/* "ReactDOM
En top level React class der bruges til at interegere med DOM'en" 
https://moodle.techcollege.dk/course/section.php?id=286234
*/
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

/* "createRoot()
En funktion der tilhører klassen ReactDOM og bruges til at "indskyde" et root element i DOM' en.
.render()
En funktion der tilhører ReactDOM klassen og i dette tilfælde peger på det nyligt lavede DOM element med ID root. Render tager imod et argument som er et React Component"
https://teams.microsoft.com/v2/ */
createRoot(document.getElementById('root')!).render(
    /* "App
    Et React Component der fungerer som det øverste eller top level React component.
    <App>
    kommer fra filen App.jsx" 
    https://teams.microsoft.com/v2/ */
    <App />,
);
