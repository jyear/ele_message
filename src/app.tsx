import * as React from "react";

import Routes from "@/routes/";
import "./app.less";

const App: React.FC = () => {
	return (
		<div className="app">
			<div className="app-menu">
				<div className="app-menu-item">会话</div>
				<div className="app-menu-item">联系人</div>
			</div>
			<div className="app-content">
				<Routes></Routes>
			</div>
		</div>
	);
};

export default App;
