import { useState } from "react";

const PostForm = ({ state = "add" }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [tags, setTags] = useState("");

	return (
		<>
			<form className="w-full">
				<h2 className="mb-6 text-2xl font-bold text-center">
					{state === "add" ? "Add A New Blog Post" : "Edit Mode"}
				</h2>
				<div className="w-full">
					<input
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter the article's title"
					/>
				</div>
				<div className="w-full my-6">
					<input
						id="tags"
						type="text"
						value={tags}
						onChange={(e) => setTags(e.target.value)}
						placeholder="Tags seperated by comma e.g javascript, typescript"
					/>
				</div>
				<div className="w-full">
					<textarea
						id="body"
						onChange={(e) => setContent(e.target.value)}
						value={content}
						placeholder="Write post content. You can use markdown syntax here e.g ### How to use RestDB"
					/>
				</div>
			</form>
		</>
	);
};

export default PostForm;
