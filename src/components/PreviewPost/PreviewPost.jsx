import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const PreviewPost = ({ children }) => {
	return (
		<ReactMarkdown
			className="prose"
			remarkPlugins={[gfm]}
			rehypePlugins={[rehypeRaw]}
			children={children}
		/>
	);
};

export default PreviewPost;
