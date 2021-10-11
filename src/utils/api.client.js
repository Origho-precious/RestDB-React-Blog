import axios from "axios";

export default axios.create({
	baseURL: "https://restblog-dced.restdb.io/rest",
	headers: {
		"content-type": "application/json",
		"x-apikey": process.env.REACT_APP_API_KEY,
		"cache-control": "no-cache",
	},
});
