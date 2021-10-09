import { useState } from "react";
import Button from "../../components/Button/Button";
import PostForm from "../../components/PostForm/PostForm";
import PreviewPost from "../../components/PreviewPost/PreviewPost";

const Write = () => {
	const [previewMode, setPreviewMode] = useState(false);

	return (
		<div
			className="px-20 py-8 relative text-white bg-black w-3/5 mx-auto rounded-lg"
			style={{ height: "85vh", maxHeight: "600px" }}
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
					<p className="mr-3">Preview</p>
				)}
				{!previewMode ? (
					<i className="fas fa-eye" />
				) : (
					<i className="fas fa-pencil-alt" />
				)}
			</div>
			{!previewMode ? (
				<>
					<PostForm state="add" />
					<footer className="flex mt-6">
						<Button className="mr-6">Publish</Button>
						<Button outline>Save Draft</Button>
					</footer>
				</>
			) : (
				<PreviewPost children={'Hey'} />
			)}
		</div>
	);
};

export default Write;
