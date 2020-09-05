import React, { useState, useEffect, useContext } from "react";
import Persnol from "./Persnol.js";
import Profile from "./Profile.js";
import Startup from "./Startup.js";
import "./Startup.css";
import OtherDetails from "./OtherDetails.js";
import { GlobalContext } from "../../Context/GlobalContext.js";
import axios from "axios";
import { getauth } from "../../util/setauth.js";
const Details = (props) => {
	const { data, dispatch } = useContext(GlobalContext);
	const initial = {
		firstname: "",
		lastname: "",
		date: "",
		count: 0,
		city: "",
		state: "",
		country: "",
	};
	const SetuserDispathcer = (payload) => {
		dispatch({ type: "SET_USER", payload });
	};
	const ItempageDispathcer = () => {
		dispatch({ type: "ITEMPAGE" });
	};
	const ErrorDispathcer = (payload) => {
		dispatch({ type: "ERROR", payload });
	};
	const [details, setDetails] = useState(initial);
	const nextStep = () => {
		setDetails({ ...details, count: details.count + 1 });
	};
	const prevStep = () => {
		setDetails({ ...details, count: details.count - 1 });
	};
	const handlechange = (name, value) => {
		setDetails({ ...details, [name]: value });
	};
	const LoginpageDispathcer = () => {
		dispatch({ type: "LOGINPAGE" });
	};
	const value = {
		details,
		setDetails,
		nextStep,
		prevStep,
		handlechange,
		data,
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
					props.history.push("/");

					LoginpageDispathcer();
					ErrorDispathcer(data.msg);
				}
			} catch (e) {
				props.history.push("/");
				LoginpageDispathcer();
				ErrorDispathcer(e.response.data.msg);
			}
		};
		fetch();
	}, []);
	return (
		<>
			{data.user.profile ? (
				<Profile />
			) : (
				<>
					{details.count === 0 ? <Startup value={value} /> : null}

					<div className="userDetails">
						{details.count === 1 ? <Persnol value={value} /> : null}
						{details.count === 2 ? (
							<OtherDetails value={value} props={props} />
						) : null}
					</div>
				</>
			)}
		</>
	);
};

export default Details;
