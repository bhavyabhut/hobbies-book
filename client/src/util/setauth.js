export const setauth = (token) => {
	const auth = token.slice(0, Math.floor(token.length / 2));
	const user = token.slice(Math.floor(token.length / 2), token.length);
	localStorage.setItem("auth-token", auth);
	localStorage.setItem("user_id", user);
};

export const getauth = () => {
	const auth = localStorage.getItem("auth-token");
	const user = localStorage.getItem("user_id");
	return auth + user;
};
