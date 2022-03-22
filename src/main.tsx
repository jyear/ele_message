import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import { RecoilRoot } from "recoil";
import "@/assets/less/reset.less";
ReactDOM.render(
	<RecoilRoot>
		<App />
	</RecoilRoot>,
	document.querySelector("#root")
);
