import React from "react";
import ReactDom from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

const App = () => <div>Hello</div>;

ReactDom.render(<App />, document.getElementById("root"));
registerServiceWorker();
