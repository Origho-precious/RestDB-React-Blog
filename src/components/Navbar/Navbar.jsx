import Button from "../Button/Button";

const Navbar = () => {
	return (
		<nav className="my-6 w-10/12 mx-auto flex items-center justify-between">
			<h3 className="text-2xl font-semibold">RestDB blog</h3>
			<ul>
				<Button>Create Post</Button>
			</ul>
		</nav>
	);
};

export default Navbar;
