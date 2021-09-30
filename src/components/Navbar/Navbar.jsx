import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
	const { pathname } = useLocation();

	return (
		<nav className="my-6 w-11/12 mx-auto flex items-center justify-between">
			<h3 className="text-2xl font-semibold">RestDB blog</h3>
			{pathname === "/" ? (
				<Link className="block" to="/write">
					<Button>Create Post</Button>
				</Link>
			) : (
				<Button style={{ background: "#fff" }}>Go back</Button>
			)}
		</nav>
	);
};

export default Navbar;
