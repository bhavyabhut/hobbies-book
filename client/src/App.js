import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./NewComponents/Navbar.js";
import { Provider } from "./Context/GlobalContext.js";
import Pages from "./NewComponents/Pages.js";
import Details from "./NewComponents/UserDetails/Details.js";
const App = () => {
	return (
		<Provider>
			<Router>
				<Route path="/" component={Navbar} />
				<Route exact path="/" component={Pages} />
				<Route path="/details" component={Details} />
			</Router>
		</Provider>
	);
};

export default App;
