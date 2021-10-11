import { Link } from "react-router-dom";
import {
	calcReadTime,
	convertDate,
	truncateText,
} from "../../utils/helperFunctions";

const PostCard = ({ id, title, body, timeStamp, tags }) => {
	return (
		<Link to={`/article/${id}`}>
			<div
				title={title}
				className="flex flex-col justify-between bg-black h-48 py-8 px-12 rounded-md hover:bg-gray-900 transition-all duration-700"
			>
				<div>
					<h3 className="font-bold text-2xl mb-4">{truncateText(title, 37)}</h3>
					<div className="flex">
						{tags?.map((tag, idx) => (
							<p key={tag + idx} className="mr-4 opacity-80 text-white text-sm">
								#{tag}
							</p>
						))}
					</div>
				</div>
				<div className="flex items-center justify-between">
					<p>{convertDate(timeStamp)}</p>
					<p>{calcReadTime(body)}</p>
				</div>
			</div>
		</Link>
	);
};

export default PostCard;
