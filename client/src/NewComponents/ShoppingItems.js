import React, { useContext, useEffect } from "react";
import Item from "./Item.js";
import Loading from "./Loading.js";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext.js";
const ShoppingItems = () => {
	const { data, dispatch } = useContext(GlobalContext);
	useEffect(() => {
		const fetch = async () => {
			try {
				const hobbi = await axios.get(`/api/v1/${data.user._id}`);
				dispatch({
					type: "SET_HOBBI",
					payload: hobbi.data.data,
				});
			} catch (e) {
				console.log(e);
			}
		};
		fetch();
	}, [data.user._id, dispatch]);
	return (
		<>
			{data.loading ? (
				<Loading />
			) : (
				<div className="ShoppingItems">
					{data.items.map((item) => (
						<Item key={item._id} item={item} />
					))}
				</div>
			)}
		</>
	);
};

export default ShoppingItems;
