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
     * isOpen: boolean
     */
    const [modalIsOpenByMariePierreLessard, setModalIsOpenByMariePierreLessard] = useState(false); 

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
            <MainByMariePierreLessard />
            <GlobalFooterByMariePierreLessard />
            <ModalByMariePierreLessard 
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
