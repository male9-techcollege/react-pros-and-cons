import mainnavstyle from "./main-nav.module.scss";

export const MainNavByMariePierreLessard = () => {
    /* Source for way to fold regions in .jsx files: https://stackoverflow.com/questions/58882591/region-for-jsx */
    // #region Sources for concatenation/combination of CSS classes in React
        /* The following combines a class from the CSS file with Tailwind styling (source: Kasper).
        Interestingly, even though Tailwind is supposed to be inline styling with the highest specificity,
        in this system, it is overriden by the styling in the CSS files. 
        <button className={style.buttonClass + " " + "shadow-2xl shadow-white"} onClick={handleClick}>Click me!</button>
    
        It is also possible to concatenate CSS class names as follows:
        "BlueKnight3108 (...)
        <div className={`${styles.class1} ${styles.class2} ${styles.classN}`}>"
        https://www.reddit.com/r/reactjs/comments/q1apj7/how_to_add_multiple_classes_to_classname_using/
        I checked: it does work. However, since mixins are replacing the BEM conventions in my SCSS files, 
        I ended up not needing to combine classes.
        */
    // #endregion
    // #region Source of general method to create category dropdown menus (submenus) in a horizontal navbar 
    /* As the tutorial from W3Schools(https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp) shows, 
    here is the key to creating a horizontal navigation bar with a drop-down submenu for each menu item (e.g. on a desktop) 
    while also making sure that the main element's content will not be pushed down by a vertical expansion 
    of the whole navigation bar: 
    1. The top-level category or title of each dropdown submenu has to be in a focusable element 
       to be accessible with a screen reader. 
    2. Put the menu items to be shown on hover below that title inside of this focusable parent. 
    3. Hide these menu items by default.
    4. Absolutely position these menu items relative to their parent. 
       The absolute positioning will make the menu items look like an overlay 
       above the content just below the nav.
    5. Create a hover effect on the focusable parent that makes these menu items visible.
       Since they are inside of the container to which the hover effect applies,
       they don't disappear when the mouse migrates from the top-level menu item
       to the submenu items. 
    */
    // #endregion
    /* Maybe TO DO: 
    add a burger menu button with a different component (there is styling for buttons in App.scss and main-nav.module.scss):
    <button type={button} className={btn}>CLICK HERE. TO DO: import icon or use HTML entity or CSS burger-menu icon</button>
    Sources for hamburger-menu icons that don't require importation or a file:
    - CSS: https://www.w3schools.com/howto/howto_css_menu_icon.asp
    - HTML entity &#9776; : https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp
    "Entity is a term from the Standard Generalized Markup Language (SGML), which refers to a reference to information that can be defined once and used throughout a document.
    The term "HTML Entity" is used as a synonym for a character reference — a pattern of characters that can represent another character in the HTML."
    https://developer.mozilla.org/en-US/docs/Glossary/Entity
    */

    return (
        <nav className={mainnavstyle.navBarByMariePierreLessard}>
            <h2 className={mainnavstyle.hiddenByMariePierreLessard}>Indhold</h2>
            <ul className={mainnavstyle.navMenuByMariePierreLessard}>
                <li>
                    <button type="button" className={mainnavstyle.btnForMenuItemByMariePierreLessard}>
                        <h3 className={mainnavstyle.h3InMainNavByMariePierreLessard}>Overvejelser</h3>
                        <ul className={mainnavstyle.submenuByMariePierreLessard}>
                            <li><a href="#advantages">Fordele </a></li>
                            <li><a href="#inconvenients">Ulemper </a></li>
                        </ul>    
                    </button>
                </li>
                <li>
                    <button type="button" className={mainnavstyle.btnForMenuItemByMariePierreLessard}>
                        <h3 className={mainnavstyle.h3InMainNavByMariePierreLessard}>Eksempler</h3>
                        <ul className={mainnavstyle.submenuByMariePierreLessard}>
                            <li><a href="#arrayWithoutFallback">Props: fortegnelse ("array") uden substitut ("fallback")</a></li>
                            <li><a href="#stringWithFallback">Props: streng med substitut</a></li>
                            <li><a href="#arraysWithFallback">Props: fortegnelser med substitut</a></li>
                        </ul>
                    </button>
                </li>
                <li>
                    <button type="button" className={mainnavstyle.btnForMenuItemByMariePierreLessard}>
                        <h3 className={mainnavstyle.h3InMainNavByMariePierreLessard}>Emne 3</h3>
                        <ul className={mainnavstyle.submenuByMariePierreLessard}>
                            <li><a href="javascript:void(0)">Link 1 -- Lorem ipsum dolor sit amet </a></li>
                            <li><a href="javascript:void(0)">Link 2 -- Lorem ipsum dolor sit amet </a></li>
                        </ul>
                    </button>
                </li>
            </ul>
        </nav>
    );
};