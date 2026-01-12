/* #region Assignment 1, sektion 2.7 */
interface greetingInterfaceByMariePierreLessard {
    id: number;
    name: string;
};

export const GreetingByMariePierreLessard = (props: greetingInterfaceByMariePierreLessard) => {
    return (
        <p>Hej, {props.name}! Dit identifikationsnummer er {props.id}.</p>
    );
};
/* #endregion */

