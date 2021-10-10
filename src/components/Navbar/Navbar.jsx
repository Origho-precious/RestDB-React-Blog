import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
	const { pathname } = useLocation();

	return (
		<nav className="my-4 w-11/12 mx-auto flex items-center justify-between">
			<Link className="block" to="/">
				<h3 className="text-2xl font-semibold">RestDB blog</h3>
			</Link>
			{pathname === "/" ? (
				<Link className="block" to="/write">
					<Button>Create Post</Button>
				</Link>
			) : (
				<Link className="block" to="/">
					<Button style={{ background: "transparent", color: "#2eff7b" }}>
						Go back
					</Button>
				</Link>
			)}
		</nav>
	);
};

export default Navbar;
