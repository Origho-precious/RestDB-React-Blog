import { Link, useHistory } from "react-router-dom";
import {
	calcReadTime,
	convertDate,
	truncateText,
} from "../../utils/helperFunctions";
import axios from "../../utils/api.client";

const ArticleCard = ({ id, title, body, timeStamp, tags, refresh }) => {
	const history = useHistory();

	const handleDelete = async () => {
		const confirmed = window.confirm(
			"Are you sure you want to delete this article?"
		);

		if (confirmed) {
			try {
				await axios.delete(`/articles/${id}`);

				refresh && refresh();
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<Link to={`/article/${id}`}>
			<div
				title={title}
				className="flex flex-col justify-between bg-black h-48 py-10 px-12 rounded-md hover:bg-gray-900 transition-all duration-700 relative"
			>
				<div className="absolute top-4 right-6 flex justify-end">
					<span
						className="mr-5 hover:text-white"
						onClick={(e) => {
							e.preventDefault();
							handleDelete();
						}}
						role="button"
					>
						<i className="fas fa-trash" />
					</span>
					<span
						className="hover:text-white"
						onClick={(e) => {
							e.preventDefault();
							history.push(`/write/${id}`);
						}}
						role="button"
					>
						<i className="fas fa-pencil-alt" />
					</span>
				</div>
				<div>
					<h3 className="font-bold text-2xl mb-4">{truncateText(title, 37)}</h3>
					<div className="flex">
						{tags?.map((tag, idx) => (
							<p key={tag + idx} className="mr-4 opacity-80 text-white text-sm">
								#{tag.trim()}
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

export default ArticleCard;
