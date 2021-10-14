import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "../../utils/api.client";

const PostForm = ({ state, id }) => {
	const history = useHistory();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (id) {
			const fetchArticles = async () => {
				setLoading(true);
				
				try {
					const { data } = await axios.get(`/articles/${id}`);
					setTitle(data?.title);
					setBody(data?.body);
					setTags(data?.tags);
					setLoading(false);
				} catch (error) {
					console.log(error);
					setLoading(false);
				}
			};

			fetchArticles();
		}
	}, [id]);

	const postArticle = async () => {
		setLoading(true);

		setError("");

		try {
			await axios.post(
				"/articles",
				JSON.stringify({
					title,
					body,
					tags,
					timestamp: new Date().toISOString(),
				})
			);

			history.push("/");
		} catch (error) {
			setLoading(false);
			setError("Something went wrong!");
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if ((title, body)) {
			return postArticle();
		}

		setError("Title and Body fields can't be empty!");
	};

	return (
		<form
			onSubmit={!loading && handleSubmit}
			id="post-article"
			className="w-full"
		>
			<h2 className="mb-6 text-2xl font-bold text-center">
				{state === "add" ? "Add New Blog Post" : "Edit Mode"}
			</h2>
			<div className="w-full">
				<input
					id="title"
					type="text"
					value={title}
					onChange={(e) => {
						setError("");
						setTitle(e.target.value);
					}}
					placeholder="Enter the article's title"
					disabled={id && loading && true}
				/>
			</div>
			<div className="w-full my-6">
				<input
					id="tags"
					type="text"
					value={tags}
					onChange={(e) => setTags(e.target.value.trim())}
					placeholder="(Optional) Tags e.g javascript, typescript "
					disabled={id && loading && true}
				/>
			</div>
			<div className="w-full">
				<textarea
					id="body"
					onChange={(e) => {
						setError("");
						setBody(e.target.value);
					}}
					value={body}
					placeholder="Write post content. You can use markdown syntax here"
					disabled={id && loading && true}
				/>
			</div>
			{error && <p className="text-red-600 text-xs mt-3 -mb-1">{error}</p>}
		</form>
	);
};

export default PostForm;
