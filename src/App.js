import React from "react";

import Header from "./components/Header/Header";
import PhotoToday from "./components/PhotoToday/PhotoToday";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<PhotoToday />
		</div>
	);
}

export default App;
