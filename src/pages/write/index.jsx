import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import PostForm from "../../components/PostForm/PostForm";
import PreviewPost from "../../components/PreviewPost/PreviewPost";

const Write = () => {
	const { id } = useParams();
	const [previewMode, setPreviewMode] = useState(false);
	const [articleBody, setArticleBody] = useState("");

	return (
		<div
			className="px-20 py-8 relative text-white bg-black w-3/5 mx-auto rounded-lg"
			style={{ height: "85vh", maxHeight: "600px", overflowY: "scroll" }}
		>
			<div
				role="button"
				onClick={() => setPreviewMode(!previewMode)}
				className="absolute right-8 top-6 hover:text-opacity-50 flex items-center duration-500 rdb-preview"
				style={{ color: previewMode ? "#2eff7b" : "" }}
			>
				{previewMode ? (
					<p className="mr-3">Write</p>
				) : (
					<p className="mr-3">Preview Body</p>
				)}
				{!previewMode ? (
					<i className="fas fa-eye" />
				) : (
					<i className="fas fa-pencil-alt" />
				)}
			</div>
			<div style={{ display: !previewMode ? "block" : "none" }}>
				<PostForm
					setArticleBody={setArticleBody}
					id={id}
					state={id ? "edit" : "add"}
				/>
				<footer className="mt-4">
					<Button form="post-article" type="submit" className="mr-6">
						Publish
					</Button>
				</footer>
			</div>
			<div style={{ display: previewMode ? "block" : "none" }}>
				<PreviewPost children={articleBody} />
			</div>
		</div>
	);
};

export default Write;
