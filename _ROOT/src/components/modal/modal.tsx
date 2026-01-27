/* Source: react-modal-codealong-med-kasper */
import type { HTMLAttributes } from "react";
import mainstyle from "../main-tag/main-tag.module.scss";
import modalstyle from "./modal.module.scss";
import { BackdropElementByMariePierreLessard } from "./backdrop";

/* Pascal case is not required for interfaces or types to work. I used type with camel case in img-el, 
in atoms folder. */
interface modalPropsByMariePierreLessard {
    /* In colour-theme-switching assignment, I added an ID as I was trying to make the styling of the modal responsive.
    As it turns out, id is like loading; it has to be made non-nullable, so I also added the extension of the generic
    interface for section elements below. 
    Since I learned something about id, I am leaving the mandatory id here even though I did not use it after all. */
    id: string;
    setModalIsOpenByMariePierreLessard: (isOpen: boolean) => void;
    modalIsOpenByMariePierreLessard: boolean;
    /* children is a reserved word in React! The app broke when I changed it. */
    children: React.ReactNode;
};

/*  Conditional rendering:

The syntax 
isOpen === true && 
has the same result as saying if... then... (&& = then) */

/* This is an addition to the modal assignment. 
See sources for this interface extension in the file for the image component. */
type extendedGenericInterfaceForModalByMariePierreLessard = HTMLAttributes<HTMLElement> & NonNullable<Pick<modalPropsByMariePierreLessard, "id" | "setModalIsOpenByMariePierreLessard" | "modalIsOpenByMariePierreLessard">>;

export function ModalByMariePierreLessard({ 
    id,
    setModalIsOpenByMariePierreLessard, 
    modalIsOpenByMariePierreLessard, 
    children }: 
    extendedGenericInterfaceForModalByMariePierreLessard) {

    /* The on-click event has to have a corresponding prop in App.tsx, where the Modal component is called. */
    /* The conditional expression is not wrapped in curly brackets because the conditional is NOT inside of the fragment. 
    Curly brackets are used when inserting JS in HTML. */
    return (
        modalIsOpenByMariePierreLessard === true && (
            <>
                <BackdropElementByMariePierreLessard />
                <section 
                    id={id}
                    className={`${mainstyle.cardWithH2ByMariePierreLessard} ${modalstyle.viewerByMariePierreLessard}`}
                >
                    <button onClick={() => setModalIsOpenByMariePierreLessard(false)}>Luk modalen</button>
                    <h2>Galleri</h2>
                    {children}
                </section>
            </>
        )
    );
};