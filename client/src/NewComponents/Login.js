import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.js";
import axios from "axios";
import { validateEmail } from "../util/validator.js";
import Errors from "./Error.js";
import Success from "./Success.js";
import { setauth } from "../util/setauth.js";
const Login = () => {
	const { data, dispatch } = useContext(GlobalContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const ErrorDispathcer = (payload) => {
		dispatch({ type: "ERROR", payload });
	};
	const SetuserDispathcer = (payload) => {
		dispatch({ type: "SET_USER", payload });
	};
	const ClearDispathcer = () => {
		dispatch({ type: "CLEAR_ERROR" });
	};
	const ClearsuccessDispathcer = () => {
		dispatch({ type: "CLEAR_SUCESS" });
	};
	const ItempageDispathcer = () => {
		dispatch({ type: "ITEMPAGE" });
	};
	const RegistrationpageDispathcer = () => {
		dispatch({ type: "REGISTRACTIONPAGE" });
	};
	const loginfn = async () => {
		ClearDispathcer();
		ClearsuccessDispathcer();
		if (!validateEmail(email))
			return ErrorDispathcer("Email must be valid");
		if (email.trim() === "" || password.trim() === "")
			return ErrorDispathcer("All field must fill");
		try {
			const { data, headers } = await axios.post(
				"/login",
				{
					email,
					password,
				},
				{ "Contemt-Type": "application/json" }
			);
			if (headers.auth) {
				setauth(headers.auth);
			}
			if (data.success === true) {
				SetuserDispathcer(data.data);
				ItempageDispathcer();
			}
		} catch (e) {
			ErrorDispathcer(e.response.data.msg);
		}
	};
	return (
		<>
			{data.error.error ? <Errors /> : null}
			{data.success.success ? <Success /> : null}
			<div className="registration-form">
				<div>
					<span className="form-lable">Email</span>
					<input
						className="form-input"
						type="text"
						placeholder="enter username"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<span className="form-lable">Password</span>
					<input
						className="form-input"
						type="password"
						placeholder="enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="register-btn" onClick={loginfn}>
					Login
				</button>
				<span className="login-span">
					New user ?
					<li
						onClick={() => {
							RegistrationpageDispathcer();
							ClearDispathcer();
						}}
					>
						Register
					</li>
				</span>
			</div>
		</>
	);
};

export default Login;
