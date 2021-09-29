const Button = ({ children, type = "button", className, ...props }) => {
	return (
		<button
			className={`${className} block text-black px-6 rounded-md font-semibold hover:opacity-75 transition-opacity duration-500 ease-in`}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
