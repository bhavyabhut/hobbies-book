import React, { useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext.js";

const Item = ({ item }) => {
	const { dispatch } = useContext(GlobalContext);
	const deleteItem = async (id) => {
		const { data } = await axios.delete(`/api/v1/${id}`);
		dispatch({
			type: "DELETE_HOBBI",
			payload: data.data._id,
		});
	};
	return (
		<div className="item">
			<li>{item.name}</li>
			<i
				className="fa fa-trash fa-2x"
				aria-hidden="true"
				onClick={() => deleteItem(item._id)}
			></i>
		</div>
	);
};

export default Item;
