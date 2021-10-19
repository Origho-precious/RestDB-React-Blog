import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "../../utils/api.client";

const PostForm = ({ state, id, setArticleBody }) => {
	const history = useHistory();
	const [data, setData] = useState(null);
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
					setData(data);
					setTitle(data?.title);
					setBody(data?.body);
					setArticleBody(data?.body);
					setTags(data?.tags);
					setLoading(false);
				} catch (error) {
					console.log(error);
					setLoading(false);
				}
			};

			fetchArticles();
		}
	}, [id, setArticleBody]);

	const postArticle = async () => {
		if ((title, body)) {
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

				return history.push("/");
			} catch (error) {
				setLoading(false);
				setError("Something went wrong!");
				return console.log(error);
			}
		}

		setError("Title and Body fields can't be empty!");
	};

	const editArticle = async () => {
		if ((title, body)) {
			setLoading(true);

			setError("");

			try {
				await axios.patch(
					`/articles/${id}`,
					JSON.stringify({
						...data,
						title,
						body,
						tags,
					})
				);

				return history.push("/");
			} catch (error) {
				setLoading(false);
				setError("Something went wrong!");
				return console.log(error);
			}
		}

		setError("Title and Body fields can't be empty!");
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (state !== "edit") {
			return postArticle();
		}

		return editArticle();
	};

	return (
		<form
			onSubmit={!loading ? onSubmitHandler : () => {}}
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
						setArticleBody(e.target.value);
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
