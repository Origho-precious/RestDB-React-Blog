import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import axios from "../../utils/api.client";
import { calcReadTime, convertDate } from "../../utils/helperFunctions";

const Article = () => {
	const params = useParams();
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [article, setArticle] = useState(null);

	useEffect(() => {
		if (!params?.id) {
			history.push("/");
		}
	}, [history, params]);

	useEffect(() => {
		const fetchArticle = async () => {
			if (params?.id) {
				try {
					setLoading(true);

					const res = await axios.get(`/articles`, {
						params: {
							q: {
								_id: params?.id,
							},
						},
					});

					setArticle(res?.data[0]);
					setLoading(false);
				} catch (error) {
					setLoading(false);
				}
			}
		};

		fetchArticle();
	}, [params]);

	return (
		<div className="w-4/5 mx-auto mt-16 mb-24">
			{loading ? (
				<p className="text-center">Loading...</p>
			) : article ? (
				<>
					<header className="rounded-md bg-black mb-10 max-w-9/12 py-12 px-20">
						<h1 className="text-2xl text-center font-semibold uppercase">
							{article?.title}
						</h1>
						<div className="flex items-center justify-center">
							<p className="mt-4 text-sm text-center mr-8">
								{convertDate(article?.timeStamp)}
							</p>
							<p className="mt-4 text-sm text-center">
								{calcReadTime(article?.body)}
							</p>
						</div>
					</header>
					<>
						<ReactMarkdown
							className="prose"
							remarkPlugins={[gfm]}
							rehypePlugins={[rehypeRaw]}
							children={article?.body}
						/>
					</>
				</>
			) : (
				<h3>Article not found!</h3>
			)}
		</div>
	);
};

export default Article;
