import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import axios from "../../utils/api.client";

const Home = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchArticles = async () => {
		setLoading(true);
		try {
			const res = await axios.get("/articles");
			setArticles(res?.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	return (
		<section className="w-1/2 mx-auto">
			{loading ? (
				<p className="text-center">Loading...</p>
			) : articles?.length ? (
				articles?.map((article) => (
					<article key={article?._id} className="mb-4">
						<ArticleCard
							id={article?._id}
							title={article?.title}
							tags={article?.tags?.split(",")}
							body={article?.body}
							timeStamp={article?.timestamp}
						/>
					</article>
				))
			) : (
				<p className="text-center">No article, create post</p>
			)}
		</section>
	);
};

export default Home;
