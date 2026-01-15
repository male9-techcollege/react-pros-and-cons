import typography from "../../styles/typography.module.scss";

// #region Assignment 2, sektion 2.7
interface SubtitleInterfaceByMariePierreLessard {
    headerText?: string;
};

export const SubtitleByMariePierreLessard = (props: SubtitleInterfaceByMariePierreLessard) => {

    let textNodeWithFallbackByMariePierreLessard = props.headerText || "Mellemrubrikken mangler";

    /* Interestingly, if no headerText is given by the parent/ancestor, 
    the p element is still displayed (I found that out after adding a question mark to headerText in the interface). */
    return (
        <header>
            <h3 className={typography.accentClrByMariePierreLessard}>
                {textNodeWithFallbackByMariePierreLessard}
            </h3>
            <p>Rubrikker og mellemrubrikker må også meget gerne være dynamiske.</p>
        </header>
    );
};
// #endregion 

