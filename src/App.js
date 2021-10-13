import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Article from "./pages/article";
import Home from "./pages/home";
import Write from "./pages/write";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exct path="/write" component={Write} />
				<Route exct path="/article/:id" component={Article} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
