import footerstyle from "./g-footer.module.scss";

export const GlobalFooterByMariePierreLessard = () => {
    return (
        <footer className={footerstyle.globalFooterGridByMariePierreLessard}>
            <p className={footerstyle.readTheDocs}>Visit <a href="https://react.dev" target="_blank" rel="noopener noreferrer" spellCheck="false">React.dev</a> to learn more.</p>
            <img src="./src/assets/react.svg" alt="React-logo" className={footerstyle.globalFooterLogoByMariePierreLessard}></img>
        </footer>
    );
};