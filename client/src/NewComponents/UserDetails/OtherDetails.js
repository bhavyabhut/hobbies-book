import React, { useContext } from "react";
import TextField from "material-ui/TextField";
import Them from "material-ui/styles/MuiThemeProvider";
import axios from "axios";
import { GlobalContext } from "../../Context/GlobalContext.js";
const OtherDetails = ({ value, props: { history } }) => {
	const { data, dispatch } = useContext(GlobalContext);
	const { details, handlechange, prevStep } = value;
	const { firstname, lastname, date, city, country, state } = details;
	const setprofile = async () => {
		try {
			const datas = await axios.post(
				"/profile",
				{
					id: data.user._id,
					firstname,
					lastname,
					date,
					city,
					country,
					state,
				},
				{ "Contemt-Type": "application/json" }
			);
			if (datas.data.success === true) {
				dispatch({
					type: "SET_USER",
					payload: datas.data.data,
				});
				history.push("/");
				dispatch({
					type: "SUCCESS",
					payload: "All Set....",
				});
			}
		} catch (e) {
			dispatch({
				type: "ERROR",
				payload: e.response.data.msg,
			});
		}
	};
	return (
		<Them>
			<>
				<TextField
					hintText="Enter Your City"
					onChange={(e) => {
						handlechange("city", e.target.value);
					}}
					value={details.city}
				/>
				<br />
				<TextField
					hintText="Enter Your State"
					onChange={(e) => {
						handlechange("state", e.target.value);
					}}
					value={details.state}
				/>
				<br />
				<TextField
					hintText="Enter Your Country"
					id="standard-size-normal"
					onChange={(e) => {
						handlechange("country", e.target.value);
					}}
					value={details.country}
				/>
				<br />
				<div>
					<button
						className="setupbtn"
						onClick={prevStep}
						style={{ margin: "2rem" }}
					>
						Previous
					</button>
					<button className="setupbtn" onClick={setprofile}>
						Confirm
					</button>
				</div>
			</>
		</Them>
	);
};

export default OtherDetails;
