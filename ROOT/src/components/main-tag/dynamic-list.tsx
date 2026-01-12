import mainstyle from "./main-tag.module.scss";

/* #region Assignment 3, sektion 2.7 */
interface ListInterfaceByMariePierreLessard {
    /* In react-intro-mc-med-kasper, we were taught how to use an array of strings with the TypeScript type
    Array<string> 
    However, I got errors that told me that I needed an ID for each of my strings, so I ended up with an array of JS objects
    instead of an array of strings.
    The right way to define this type was in the error messages shown by VS Code on hover.
    */
    list?: {id: number; name: string}[];
};

export function OrganisedListByMariePierreLessard({ list }: ListInterfaceByMariePierreLessard) {
    console.log(list); //This does log 2 arrays with a length of 5

    /* If there is no list, the error message does get displayed. */
    if (list) {
        return (
            <ol className={mainstyle.olDecimalByMariePierreLessard} >
                {list.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    );
                })}
            </ol>
        );
    } else {
        return (
            <ol className={mainstyle.olDecimalByMariePierreLessard} >
                <li>"Der er ingen list at finde!"</li>
            </ol>
        );
    };
};
/* #endregion */

