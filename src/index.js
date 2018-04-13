import React from "react";
import { render } from "react-dom";
import { App } from "components/App";

const Main = () => <App />;
const wrapper = document.getElementById("app");
wrapper ? render(<Main />, wrapper) : false;
