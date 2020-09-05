import React, { useContext, useEffect } from "react";
import Login from "./Login.js";
import Items from "./Items.js";
import Registration from "./Registration.js";
import { GlobalContext } from "../Context/GlobalContext.js";
import axios from "axios";
import { getauth } from "../util/setauth.js";
const Pages = (props) => {
	const { data, dispatch } = useContext(GlobalContext);
	const SetuserDispathcer = (payload) => {
		dispatch({ type: "SET_USER", payload });
	};
	const ItempageDispathcer = () => {
		dispatch({ type: "ITEMPAGE" });
	};
	const ErrorDispathcer = (payload) => {
		dispatch({ type: "ERROR", payload });
	};
	useEffect(() => {
		const fetch = async () => {
			try {
				const { data } = await axios.get("/login/auth", {
					headers: { "auth-token": getauth() },
				});
				if (data.success === true) {
					SetuserDispathcer(data.data);
					ItempageDispathcer();
				} else {
					ErrorDispathcer(data.msg);
				}
			} catch (e) {
				ErrorDispathcer(e.response.statusText);
			}
		};
		fetch();
	}, []);
	return (
		<>
			{data.page.item ? <Items /> : null}
			{data.page.login ? <Login /> : null}
			{data.page.registration ? <Registration /> : null}
		</>
	);
};

export default Pages;
