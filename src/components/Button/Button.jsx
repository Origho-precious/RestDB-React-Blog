const Button = ({
	children,
	outline,
	type = "button",
	className,
	...props
}) => {
	return (
		<button
			style={{
				background: outline ? "#242424" : "",
				color: outline ? "#2eff7b" : "#000",
			}}
			className={`${className} block text-black px-6 rounded-md font-semibold hover:opacity-75 transition-opacity duration-500 ease-in`}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
