import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext.js";
import Errors from "./Error.js";
import Success from "./Success.js";

const Form = () => {
	const [name, setName] = useState("");
	const { data, dispatch } = useContext(GlobalContext);
	const addHobbi = async () => {
		if (name.trim() !== "") {
			try {
				const res = await axios.post(
					"api/v1/",
					{ name, id: data.user._id },
					{ "Contemt-Type": "application/json" }
				);
				dispatch({
					type: "ADD_HOBBI",
					payload: res.data.data,
				});
				setName("");
			} catch (e) {
				// statements
				console.log(e, e.response);
			}
		} else {
			dispatch({
				type: "ERROR",
				payload: "Hobbi Not be empty",
			});
		}
	};
	return (
		<>
			<div className="form">
				<input
					type="text"
					className="form-input"
					onChange={(e) => {
						setName(e.target.value);
						dispatch({ type: "CLEAR_ERROR" });
					}}
					value={name}
					placeholder="Enter Your Hobbies"
				/>
				<button onClick={() => addHobbi()}>Add</button>
			</div>
			{data.error.error ? <Errors /> : null}
			{data.success.success ? <Success /> : null}
		</>
	);
};

export default Form;
