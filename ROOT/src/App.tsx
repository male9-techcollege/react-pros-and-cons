import "./App.css";
import { GlobalHeaderByMariePierreLessard } from "./components/g-header/g-header";
import { MainByMariePierreLessard } from "./components/main-tag/main-tag";
import { GlobalFooterByMariePierreLessard } from "./components/g-footer/g-footer";

function App() {

  return (
    /* This is a fragment element: 
    <></>
    It is not always required.
    It is useful when more than one element has to be returned, but there are not to be returned in a parent that is a real element. 
    Since React components have to return a single thing, such a fragment is necessary in some cases.
    */
    <>
      <GlobalHeaderByMariePierreLessard />
      <MainByMariePierreLessard />
      <GlobalFooterByMariePierreLessard />
    </>
  );
};

/* This is a top-level component. */
export default App;
