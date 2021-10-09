import Button from "../Button/Button";
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = (props) => {
	const { pathname } = useLocation();
	const history = useHistory();

	return (
		<nav className="my-4 w-11/12 mx-auto flex items-center justify-between">
			<h3 className="text-2xl font-semibold">RestDB blog</h3>
			{pathname === "/" ? (
				<Link className="block" to="/write">
					<Button>Create Post</Button>
				</Link>
			) : (
				<Button
					onClick={() => history.push("/")}
					style={{ background: "transparent", color: "#2eff7b" }}
				>
					Go back
				</Button>
			)}
		</nav>
	);
};

export default Navbar;
