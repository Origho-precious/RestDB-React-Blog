import { useState } from "react";
import Button from "../../components/Button/Button";
import PostForm from "../../components/PostForm/PostForm";

const Write = () => {
	const [previewMode] = useState(false);

	return (
		<div
			className="px-20 py-8 relative text-white bg-black w-3/5 mx-auto rounded-lg"
			style={{ height: "85vh", maxHeight: "600px" }}
		>
			{!previewMode ? <PostForm state="add" /> : null}
			<footer className="flex mt-6">
				<Button className="mr-6">Publish</Button>
				<Button outline>Save Draft</Button>
			</footer>
		</div>
	);
};

export default Write;
