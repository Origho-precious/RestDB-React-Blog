const PostCard = ({ id, title, timeStamp, tags }) => {
	const truncateText = (text) => {
		return text.length <= 37 ? text : `${text.slice(0, 37)}...`;
	};

	return (
		<div
			title={title}
			className="flex flex-col justify-between bg-black h-48 py-8 px-12 rounded-md"
		>
			<div>
				<h3 className="font-bold text-2xl mb-4">{truncateText(title)}</h3>
				<div className="flex">
					{tags?.map((tag) => (
						<p className="mr-4 opacity-80 text-white text-sm">#{tag}</p>
					))}
				</div>
			</div>
			<p>Oct 10th (4 hours ago)</p>
		</div>
	);
};

export default PostCard;
