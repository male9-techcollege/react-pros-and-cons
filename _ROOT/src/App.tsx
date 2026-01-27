/* Source: react-modal-codealong-med-kasper */
import { useState, useEffect } from 'react';
// #region Comments about using Vite's 2 style sheets in folder src 
/* Through experimentation, I found out that styling is not always accepted or found in all cases 
if I rename App.css and index.css. However, giving them a different extension (.scss) seems to be fine 
(in order to use SCSS variables). 
In particular, I get type errors (TypeScript) when I try to use className in App.tsx. 
Kasper said that it's best to keep these files as they are in the src folder. I wondered why. Indeed,
it is weird that files called *.module.scss get imported into an index file, and Vite doesn't make it clear
which .css (not .scss) file is the src folder. Kasper said that these 2 .css files are for global styling,
so they are both filling the purpose of an index file. 
The following source does not use the same tech stack as we are using in the current exercises, but the following citation
probably points to the reason for the lack of flexibility. There are compilers (both for SCSS and TypeScript), 
and they work a certain way. The compilers cannot find certain files or combine them properly unless certain conditions 
are met.
"Where are CSS modules and what about isolation
So far we allow splitting css to multiple files and merging it with webpack (...)
Assuming that files ./static/style.module.css has defined css classes .blueBox and .redLabel this code will not work 
because TypeScript does not know how to work with css type of modules. To make it work you can replace css.blueBox 
with “blueBox” and “${css.redLabel}” with “redLabel”."
https://medium.com/@dimi_2011/setting-up-css-modules-in-typescript-project-52596526d19
*/
// #endregion 
import "./App.scss";
import { GlobalHeaderByMariePierreLessard } from "./components/g-header/g-header";
import { MainNavByMariePierreLessard } from "./components/main-nav/main-nav";
import { MainByMariePierreLessard } from "./components/main-tag/main-tag";
import { GlobalFooterByMariePierreLessard } from "./components/g-footer/g-footer";
import { ModalByMariePierreLessard } from "./components/modal/modal";
import { ImgComponentByMariePierreLessard } from "./components/atoms/img-el";
import blondine from "./assets/blondine_akkc_img089.webp";

function App() {

    /* One of the React rules is that states (like isOpen) should be kept as close to the component where it used as possible. 
    However, this is not always possible. Sometimes, states are used by multiple components. 
    The solution is to define the state in a common ancestor, for instance App. */
    /**
     * modalIsOpenByMariePierreLessard: boolean
     */
    const [modalIsOpenByMariePierreLessard, setModalIsOpenByMariePierreLessard] = useState(false); 
    /* False = dark mode (dark colour mode, dark theme, dark colour theme), i.e. the default in this project. 
    True = light mode (light colour mode, light theme, light colour theme). 
    A light-mode class needs to be applied to the root whenever the value is truthy.
    */
    const [colourModeByMariePierreLessard, setColourModeByMariePierreLessard] = useState(false);

    useEffect(() => {
        if (colourModeByMariePierreLessard === true) {
            //#region How to hit :root with JS 
            /* Since the initial font and background colours are declared in the scope of the pseud-class :root in the style sheet,
            I wanted to hit the root, and not a child like body or every direct child of the div with #root. The point is to
            override that initial styling (dark mode in this case).
            
            "The documentElement read-only property of the Document interface returns the Element that is the root element of 
            the document (for example, the <html> element for HTML documents)."
            https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement 

            An alternative to using a class would be to use an attribute in the CSS file and then change that attribute with
            setAttribute() in JS, as explained here: 
            https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
            */
            //#endregion How to hit :root with JS 
            document.documentElement.classList.add("light");
            //#region Notes about unsuccessful attempt with setAttribute and getElementById
            /* The following experiment did not work in the end. It was like the background colour was overriden by something,
            probably the background colour set in the style sheet of the modal. Indeed, with React, CSS styling weirdly
            overrides what should be styling with a higher specificity, such as inline styling with Tailwind or the following.
            I am guessing that the transpiler does that.

            Interestingly, I had to add a conditional in order to get rid of an error according to which 
            the element gotten by ID was possibly null. The element in question did have the ID specified,
            and it was in the same component (App()) as the following.
            
            const modalByMariePierreLessard = document.getElementById("modalByMariePierreLessard");
            if (modalByMariePierreLessard) {
                modalByMariePierreLessard.setAttribute("bgColor", "red");
            };
            */
            //#endregion Notes about unsuccessful attempt with setAttribute and getElementById
        } else {
            document.documentElement.classList.remove("light");
        };
    }, [colourModeByMariePierreLessard]);

    return (
        /* This is a fragment element: 
        <></>
        It is not always required.
        It is useful when more than one element has to be returned, 
        but there are not to be returned in a parent that is a real element. 
        Since React components have to return a single thing, such a fragment is necessary in some cases.
        */
       /* Interesting, both of the following work:
       className="allImgByMariePierreLessard"
       className={"allImgByMariePierreLessard"}
       */
        <>
            <GlobalHeaderByMariePierreLessard />
            <MainNavByMariePierreLessard setModalIsOpenByMariePierreLessard={setModalIsOpenByMariePierreLessard} />
            <MainByMariePierreLessard theme={colourModeByMariePierreLessard} toggleAction={setColourModeByMariePierreLessard} />
            <GlobalFooterByMariePierreLessard />
            <ModalByMariePierreLessard 
                id={"modalByMariePierreLessard"}
                modalIsOpenByMariePierreLessard={modalIsOpenByMariePierreLessard} 
                setModalIsOpenByMariePierreLessard={setModalIsOpenByMariePierreLessard}
            >
                <ImgComponentByMariePierreLessard 
                    src={blondine} 
                    alt={"Graffiti på Aalborg Kongres & Kultur Center (AKKC)"} 
                    loading={"lazy"} 
                    className="allImgByMariePierreLessard"
                />
            </ModalByMariePierreLessard>
        </>
    );
};

/* This is a top-level component. */
export default App;
