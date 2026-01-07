import globalstyle from "../../styles/colors.module.scss";
import typography from "../../styles/typography.module.scss";
import mainstyle from "./main-tag.module.scss";

export const MainByMariePierreLessard = () => {
    return (
        <main className={mainstyle.proConGridByMariePierreLessard}>
            <section className={mainstyle.card}>
                <h2 className={typography.accentClrByMariePierreLessard}>Fordele</h2>
                <ol className={mainstyle.olByMariePierreLessard}>
                    <li><span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> har et stort fællesskab på nettet, hvis man har spørgsmål.</li>
                    <li><span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> er nemmere at lære end <span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Angular</span>, for eksempel.</li>
                    <li><span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> tilbyder en god skalerbarhed, f.eks. for en lang dynamisk side. <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> opdaterer nemlig elementer i stedet for at genopfriske hele siden. Det forhøjer ydeevnen.</li>
                    <li><span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> gør samarbejdet nemmere og store projekter mere overskuelige.</li>
                    <li><span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span>-metoder undgår spaghetti-kode, når man arbejder i hold.</li>
                    <li>Biblioteket formindsker gentagelsen i koden, da det er baseret på atomisk design. Når web-udviklere bruger atomisk design, splitter de deres kode i genbrugelige kodestumper.</li>
                    <li>Som andre <span spellCheck="false">frontend</span>-biblioteker, gør <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> en <span spellCheck="false">frontend</span>-udviklers arbejde hurtigt.</li>
                </ol>
            </section>
            <section className={mainstyle.card}>
                <h2 className={typography.accentClrByMariePierreLessard}>Ulemper</h2>
                <ol className={mainstyle.olByMariePierreLessard}>
                    <li><span spellCheck="false">jQuery</span> er stadigvæk biblioteket, som er den mest brugt til <span spellCheck="false">frontend</span>-udvikling. (Det er mere populært end <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span>, <span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Angular</span> og <span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Vue</span> tilsammen.)</li>
                    <li><span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Angular</span> har en endnu bedre skalerbarhed end <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span>. Derved bruger store selskaber typisk <span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Angular</span>, selvom biblioteket er mere besværligt at lære.</li>
                    <li><span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> introducerer snart knækkende ændringer (<span className={globalstyle.foreignLangByMariePierreLessard} spellCheck="false">"breaking changes"</span>) ved at droppe brugen af JS-klasser. Det risikerer at få udviklere til at flygte fra <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span>, da det samme skete med <span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Angular</span>, da <span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Angular.js</span> blev til <span className={mainstyle.brandsByMariePierreLessard} spellCheck="false">Angular</span>. (Dengang ændrede biblioteket drastisk sin måde at fungere på.) Med andre ord ender stiafhængigheden (<span className={globalstyle.foreignLangByMariePierreLessard} spellCheck="false">"path dependency"</span>).</li>
                    <li><span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> er bedst til apper med en enkelt side (<dfn className={mainstyle.backToNormalByMariePierreLessard}><abbr title="single-page app">SPA</abbr></dfn> eller <span className={globalstyle.foreignLangByMariePierreLessard} spellCheck="false">"single-page app"</span> på engelsk).</li>
                    <li>Da <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> bruger mange afhængigheder, tager <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span>-apper længere tid til at blive overført til klienten, og de bruger også mere hukommelse. Til små projekter kan <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span> derved være for ressourcekrævende.</li>
                    <li>For at lære at bruge <span className={typography.reactBlueByMariePierreLessard} spellCheck="false">React</span>, skal man helst kende lidt til JavaScript (<abbr title="JavaScript">JS</abbr>) i forvejen.</li>
                </ol>
            </section>
        </main>
    );
};