/* Source: react-modal-codealong-med-kasper */
import mainstyle from "../main-tag/main-tag.module.scss";
import modalstyle from "./modal.module.scss";
import { BackdropElementByMariePierreLessard } from "./backdrop";

/* Pascal case is not required for interfaces or types to work. I used type with camel case in img-el, 
in atoms folder. */
interface modalPropsByMariePierreLessard {
    setModalIsOpenByMariePierreLessard: (isOpen: boolean) => void;
    modalIsOpenByMariePierreLessard: boolean;
    /* children is a reserved word in React! The app broke when I changed it. */
    children: React.ReactNode;
};

/*  Conditional rendering:

The syntax 
isOpen === true && 
has the same result as saying if... then... (&& = then) */

export function ModalByMariePierreLessard({ 
    setModalIsOpenByMariePierreLessard, 
    modalIsOpenByMariePierreLessard, 
    children }: 
    modalPropsByMariePierreLessard) {

    /* The on-click event has to have a corresponding prop in App.tsx, where the Modal component is called. */
    /* The conditional expression is not wrapped in curly brackets because the conditional is NOT inside of the fragment. 
    Curly brackets are used when inserting JS in HTML. */
    return (
        modalIsOpenByMariePierreLessard === true && (
            <>
                <BackdropElementByMariePierreLessard />
                <section className={`${mainstyle.cardWithH2ByMariePierreLessard} ${modalstyle.viewerByMariePierreLessard}`}>
                    <button onClick={() => setModalIsOpenByMariePierreLessard(false)}>Luk modalen</button>
                    <h2>Galleri</h2>
                    {children}
                </section>
            </>
        )
    );
};