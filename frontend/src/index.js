import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Todos from "./components/Todos";
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    {/* <TrelloLike></TrelloLike> */}
    <Todos  pageLimit="20" hasMore={true}/>
  </React.StrictMode>,
  document.getElementById("root")
);
