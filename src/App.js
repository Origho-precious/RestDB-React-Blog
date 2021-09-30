import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import Write from "./pages/write";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exct path="/write/:id" component={Write} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
