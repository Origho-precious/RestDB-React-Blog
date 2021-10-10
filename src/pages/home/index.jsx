import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import axios from "../../utils/api.client";

const Home = () => {
	const [articles, setArticles] = useState([]);

	const fetchArticles = async () => {
		try {
			const res = await axios.get("/articles");
			setArticles(res?.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	return (
		<section className="w-1/2 mx-auto">
			{articles?.map((article) => (
				<ArticleCard
					key={article?._id}
					id={article?._id}
					title={article?.title}
					tags={article?.tags?.split(",")}
					body={article?.body}
					timeStamp={article?.timeStamp}
				/>
			))}
		</section>
	);
};

export default Home;
