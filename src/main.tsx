import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import { RecoilRoot } from "recoil";
console.log(process.env.RUN_ENV);
ReactDOM.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>,
	document.querySelector("#root")
);
