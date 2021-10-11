import moment from "moment";

export const truncateText = (text, maxNum) => {
	return text.length <= maxNum ? text : `${text.slice(0, maxNum)}...`;
};

export const calcReadTime = (text) => {
	const wpm = 200;
	const words = text.trim().split(/\s+/).length;
	const time = Math.ceil(words / wpm);

	return `${time} min(s) read`;
};

export const convertDate = (date) => {
	return moment(date).format("MMM Do, h:mm a");
};
