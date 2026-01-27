import type { HTMLAttributes } from "react";
import type { Dispatch, SetStateAction } from "react";

import globalstyle from "../../styles/colors.module.scss";
import typography from "../../styles/typography.module.scss";
import mainstyle from "./main-tag.module.scss";
import { GreetingByMariePierreLessard, GreetingFieldsetByMariePierreLessard } from "./greetings";
import { nameArrayByMariePierreLessard } from "../../model/data";
import { recipeArrayByMariePierreLessard } from "../../model/data";
import { filmArrayByMariePierreLessard } from "../../model/data";
import { SubtitleByMariePierreLessard } from "./dynamic-title";
import { OrganisedListByMariePierreLessard } from "./dynamic-list";
import { ClickCounterByMariePierreLessard } from "./click-counter";
import { BtnComponentByMariePierreLessard } from "../atoms/btn";

/* Assignment about theme-switching button:
By prop conveyance, I mean that this interface defines a component that is an intermediary between the ancestor
where the prop is defined and the descendant that actually uses that prop for something. In this case, it is a 
button that changes the background of the App component. */
interface mainInterfaceForPropConveyanceByMariePierreLessard {
    /* Source for way to fold regions in .jsx files: https://stackoverflow.com/questions/58882591/region-for-jsx */
    // #region Props for the conveyance of data required by the theme-switching button
    theme: boolean;
    toggleAction: Dispatch<SetStateAction<boolean>>;
    // #endregion
    /* children is a reserved word in React! The app will break if I changed it.
    I found that out in the modal assignment (see folder react-pros-and-cons). Source: Kasper. */
    /* Til læreren:
    Jeg kunne have flyttet alle børn til App.tsx, da jeg udførte opgaven "Lav en dynamisk knap", men det risikerede
    at gøre tidligere afleveringer til noget helt andet, og jeg vil ikke pille for meget ved dem. Det kunne blandt
    andet have ført til, at jeg ikke længere opfyldte nogle krav i opgaverne. Som konsekvens valgte jeg at gøre  children
    fakultativ, selvom det ikke laver meget mening at gøre main-elementets børn fakultative.   

    Note to self: this group of assignments is NOT good to use as a library because of this type of course correction.
    At the time where I wrote this note, my most library-like assignment folder was react-gallery-wrapper. */
    children?: React.ReactNode;
};

// #region Research on generic interface to use with specific HTML elements (partial copy from react-gallery-wrapper)
/* Based on the extensive sources provided for my image component (see file atoms/img-el.tsx), I simply guessed that 
HTMLElement had to go between the angle brackets (I was offline at the time). 
React doesn't seem to offer a generic interface specifically created for HTML elements like main and section 
(based on a quick search in the node_modules/@types/react/ts5.0/index.d.ts file). 

Ah! After a longer search in that file, I found the interface IntrinsicElements, which shows that quite a few HTML elements 
do use HTMLAttributes<HTMLElement>. Some also use an interface with another name between angle brackets (which should be 
the name of a type), such as HTMLAttributes<HTMLBodyElement>, HTMLAttributes<HTMLDivElement>, 
HTMLAttributes<HTMLHeadingElement>, HTMLAttributes<HTMLParagraphElement>, HTMLAttributes<HTMLSpanElement>,
HTMLAttributes<HTMLUListElement>,  ...: 
- abbr (searching for abbrHTMLAttributes or HTMLAbbrElement gives no result)
- address (searching for addressHTMLAttributes gives no result)
- article (searching for articleHTMLAttributes gives no result)
- aside (searching for asideHTMLAttributes gives no result)
- b (searching for bHTMLAttributes gives no result)
- ...
Other options: 
- the interface AllHTMLAttributes (which extends the interface HTMLAttributes)
- the interface HTMLProps (which extends the interfaces AllHTMLAttributes and ClassAttributes)
- probably others
*/
// #endregion 
type extendedGenericInterfaceForMainByMariePierreLessard = HTMLAttributes<HTMLElement> & mainInterfaceForPropConveyanceByMariePierreLessard;

export const MainByMariePierreLessard = ({ theme, toggleAction, children, ...rest }: 
    extendedGenericInterfaceForMainByMariePierreLessard) => {
    return (
        <main>
            {/* Exercise about advantages and inconvenients, with styling  */}
            <div className={mainstyle.gridForOlByMariePierreLessard}>
                <section id="advantages" className={mainstyle.cardWithH2ByMariePierreLessard}>
                    <h2 className={typography.accentClrByMariePierreLessard}>Fordele</h2>
                    <ol className={mainstyle.olLaByMariePierreLessard}>
                        <li>
                            <span
                                className={typography.reactBlueByMariePierreLessard} spellCheck="false"
                            >React</span> har et stort fællesskab på nettet, hvis man har spørgsmål.
                        </li>
                        <li>
                            <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> er nemmere at lære end <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Angular</span>, for eksempel.
                        </li>
                        <li>
                            <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> tilbyder en god skalerbarhed, f.eks. for en lang dynamisk side. <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> opdaterer nemlig elementer i stedet for at genopfriske hele siden. Det forhøjer ydeevnen.
                        </li>
                        <li>
                            <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> gør samarbejdet nemmere og store projekter mere overskuelige.
                        </li>
                        <li>
                            <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span>-metoder undgår spaghetti-kode, når man arbejder i hold.
                        </li>
                        <li>
                            Biblioteket formindsker gentagelsen i koden, da det er baseret på atomisk design. Når web-udviklere bruger atomisk design, splitter de deres kode i genbrugelige kodestumper.
                        </li>
                        <li>
                            Som andre <span
                                spellCheck="false"
                            >frontend</span>-biblioteker, gør <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> en <span
                                spellCheck="false"
                            >frontend</span>-udviklers arbejde hurtigt, for eksempel tak til <abbr
                                title="properties"
                            >props</abbr> (egenskaber eller "properties" på engelsk).
                        </li>
                    </ol>
                </section>
                <section id="inconvenients" className={mainstyle.cardWithH2ByMariePierreLessard}>
                    <h2 className={typography.accentClrByMariePierreLessard}>Ulemper</h2>
                    <ol className={mainstyle.olLaByMariePierreLessard}>
                        <li>
                            <span
                                spellCheck="false"
                            >jQuery</span> er stadigvæk biblioteket, som er den mest brugt til <span
                                spellCheck="false"
                            >frontend</span>-udvikling. (Det er mere populært end <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span>, <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Angular</span> og <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Vue</span> tilsammen.)
                        </li>
                        <li>
                            <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Angular</span> har en endnu bedre skalerbarhed end <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span>. Derved bruger store selskaber typisk <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Angular</span>, selvom biblioteket er mere besværligt at lære.
                        </li>
                        <li>
                            <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> introducerer snart knækkende ændringer (<span
                                className={globalstyle.foreignLangByMariePierreLessard}
                                spellCheck="false"
                            >"breaking changes"</span>) ved at droppe brugen af JS-klasser. Det risikerer at få udviklere til at flygte fra <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span>, da det samme skete med <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Angular</span>, da <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Angular.js</span> blev til <span
                                className={mainstyle.brandsByMariePierreLessard}
                                spellCheck="false"
                            >Angular</span>. (Dengang ændrede biblioteket drastisk sin måde at fungere på.) Med andre ord ender stiafhængigheden (<span
                                className={globalstyle.foreignLangByMariePierreLessard}
                                spellCheck="false"
                            >"path dependency"</span>).
                        </li>
                        <li>
                            <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> er bedst til apper med en enkelt side (<dfn
                                className={mainstyle.backToNormalByMariePierreLessard}
                            >
                                <abbr
                                    title="single-page app"
                                >SPA
                                </abbr>
                            </dfn> eller <span
                                className={globalstyle.foreignLangByMariePierreLessard}
                                spellCheck="false"
                            >"single-page app"</span> på engelsk).
                        </li>
                        <li>
                            Da <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> bruger mange afhængigheder, tager <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span>-apper længere tid til at blive overført til klienten, og de bruger også mere hukommelse. Til små projekter kan <span
                                className={typography.reactBlueByMariePierreLessard}
                                spellCheck="false"
                            >React</span> derved være for ressourcekrævende.
                        </li>
                        <li>For at lære at bruge <span
                            className={typography.reactBlueByMariePierreLessard}
                            spellCheck="false"
                        >React</span>, skal man helst kende lidt til JavaScript (<abbr
                            title="JavaScript">JS</abbr>) i forvejen.</li>
                    </ol>
                </section>
            </div>

            {/* Exercises about props */}
            <section id="arrayWithoutFallback" className={mainstyle.cardWithH2ByMariePierreLessard}>
                <h2 className={typography.accentClrByMariePierreLessard}>Eksempler af komponenter, som modtager props</h2>

                {/* Exercise about array (to issue greetings) */}
                <h3 className={typography.accentClrByMariePierreLessard}>Hilsner</h3>
                {nameArrayByMariePierreLessard.map((item) => {
                    return (
                        <GreetingByMariePierreLessard key={item.id} name={item.name} id={item.id} />
                    );
                })}

                {/* Exercise about passing a string or displaying a fallback instead */}
                <section id="stringWithFallback" className={mainstyle.cardWithH3ByMariePierreLessard}>
                    <SubtitleByMariePierreLessard headerText={"Props er seje"} />
                    <p className={mainstyle.columnsByMariePierreLessard}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab est dicta natus odio aspernatur ullam sunt aliquid molestias architecto culpa? Molestias reiciendis rerum aliquid quae, doloremque corrupti inventore. Maiores exercitationem blanditiis harum. Aut maiores atque recusandae ut culpa? Odio, nemo iure. Inventore, sint! Quasi reprehenderit sed fuga, nesciunt doloribus perferendis quibusdam doloremque repellendus dignissimos ad, porro sequi molestiae nisi nostrum dolore tempore quod sunt quis est at, nam hic ullam esse. Maiores molestias veritatis esse sed nobis minima id nihil natus non doloremque, provident et. Sapiente magni velit odio? Nisi commodi exercitationem totam inventore modi eligendi quaerat corrupti reiciendis repellat?
                    </p>
                </section>

                {/* Exercise about passing an array or displaying a fallback instead */}
                <section id="arraysWithFallback">
                    <h3 className={typography.accentClrByMariePierreLessard}>Dynamiske lister</h3>
                    <div className={mainstyle.gridForOlByMariePierreLessard}>
                        <section className={mainstyle.cardWithH4ByMariePierreLessard}>
                            <h4 className={typography.accentClrByMariePierreLessard}>Dejlige livsretter</h4>
                            <OrganisedListByMariePierreLessard list={recipeArrayByMariePierreLessard} />
                        </section>
                        <section className={mainstyle.cardWithH4ByMariePierreLessard}>
                            <h4 className={typography.accentClrByMariePierreLessard}>Vidunderlige film</h4>
                            <OrganisedListByMariePierreLessard list={filmArrayByMariePierreLessard} />
                        </section>
                    </div>
                </section>
            </section>

            {/* Exercises about hooks */}
            <section className={mainstyle.cardWithH2ByMariePierreLessard}>
                <h2 className={typography.accentClrByMariePierreLessard}>Eksempler af komponenter, som bruger hooks</h2>

                {/* Exercise about displaying the value entered in an input by storing it in a state */}
                <section id="greetingInput">
                    <h3 className={typography.accentClrByMariePierreLessard}>
                        Hook (useState) med startværdi, kontrolleret input-felt og nulstillingsknap
                    </h3>
                    <form className={`
                        ${mainstyle.hookFormByMariePierreLessard} 
                        ${mainstyle.hookFormResponsiveByMariePierreLessard}
                        `}>
                        <GreetingFieldsetByMariePierreLessard />
                    </form>
                </section>

                {/* Exercise about using an event handler to update a state */}
                <section id="clickCounter">
                    <h3 className={typography.accentClrByMariePierreLessard}>
                        Hook (useState) med startværdi, tællingsfunktion og nulstillingsknap
                    </h3>
                    <form className={`
                        ${mainstyle.hookFormByMariePierreLessard} 
                        ${mainstyle.hookFormResponsiveByMariePierreLessard}
                        `}>
                        <ClickCounterByMariePierreLessard />
                    </form>
                </section>

                {/* Exercise about a button component that updates a state */}
                <section id="colourTheme">
                    <h3 className={typography.accentClrByMariePierreLessard}>
                        Hooks (useState, useEffect og useCallback) til at skifte mellem mørk og lys tilstand
                    </h3>
                    <form className={mainstyle.hookFormByMariePierreLessard}>
                        <fieldset>
                            <legend>Prøv mig</legend>
                            <BtnComponentByMariePierreLessard
                                type={"button"}
                                theme={theme}
                                toggleAction={toggleAction}
                            >
                                Klik for at skifte mellem mørk og lys tilstand
                            </BtnComponentByMariePierreLessard>
                            <BtnComponentByMariePierreLessard
                                type={"button"}
                                theme={theme}
                                toggleAction={toggleAction}
                                size={"small"}
                            >
                                Klik her for at vælge størrelse S
                            </BtnComponentByMariePierreLessard>
                            <BtnComponentByMariePierreLessard
                                type={"button"}
                                theme={theme}
                                toggleAction={toggleAction}
                                size={"medium"}
                            >
                                Klik her for at vælge størrelse M
                            </BtnComponentByMariePierreLessard>
                            <BtnComponentByMariePierreLessard
                                type={"button"}
                                theme={theme}
                                toggleAction={toggleAction}
                                size={"large"}
                            >
                                Klik her for at vælge størrelse L
                            </BtnComponentByMariePierreLessard>
                        </fieldset>
                    </form>
                </section>
            </section>
        </main>
    );
};