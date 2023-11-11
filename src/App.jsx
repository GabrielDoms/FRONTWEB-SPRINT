import { Fragment } from "react";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global-styles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router />
    </Fragment>
  );
}

export default App;
