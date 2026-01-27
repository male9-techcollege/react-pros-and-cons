import typography from "../../styles/typography.module.scss";
import headerstyle from "./g-header.module.scss";

export const GlobalHeaderByMariePierreLessard = () => {
    /* Reminder: if I put a line break inside of text nodes, spaces between words disappear in that spot! */
    return (
        <header className={headerstyle.headerGridByMariePierreLessard}>
            <h1>
                Fordele og ulemper med <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span>
                -biblioteket
            </h1>
            {/* "andreypopp
            on Jun 27, 2014
            Contributor
            You should use dateTime, DOM properties are camelCased in React." 
            https://github.com/facebook/react/issues/1749
            */}
            <p className={headerstyle.bylineByMariePierreLessard}>
                Marie-Pierre Lessard, den <time dateTime="2026-01-05">5. januar 2026.</time>
            </p>
        </header>
    );
};