import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.js";
import Errors from "./Error.js";
import axios from "axios";
import { validateEmail } from "../util/validator.js";
import Success from "./Success.js";

const Registration = () => {
	const { data, dispatch } = useContext(GlobalContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCpassword] = useState("");
	const [number, setNumber] = useState("");

	const ErrorDispathcer = (payload) => {
		dispatch({ type: "ERROR", payload });
	};
	const SuccessrDispathcer = (payload) => {
		dispatch({ type: "SUCCESS", payload });
	};
	const LoginpageDispathcer = () => {
		dispatch({ type: "LOGINPAGE" });
	};
	const ClearDispathcer = () => {
		dispatch({ type: "CLEAR_ERROR" });
	};

	const registerfn = async () => {
		ClearDispathcer();
		if (!validateEmail(email))
			return ErrorDispathcer("Email must be valid");

		if (cpassword !== password)
			return ErrorDispathcer("Password dont match");

		if (name.trim() === "" || email.trim() === "" || password.trim() === "")
			return ErrorDispathcer("All field must fill");

		if (password.length < 9) return ErrorDispathcer("Password not strong");

		try {
			const { data } = await axios.post(
				"/login/registration",
				{
					name,
					email,
					password,
					number,
				},
				{ "Contemt-Type": "application/json" }
			);
			if (data.success === true) {
				LoginpageDispathcer();
				SuccessrDispathcer("Successful Registration...");
			}
		} catch (e) {
			ErrorDispathcer(e.response.data.msg);
		}
	};
	return (
		<>
			{data.success.success ? <Success /> : null}

			{data.error.error ? <Errors /> : null}

			<div className="registration-form">
				<div>
					<span className="form-lable">username</span>
					<input
						className="form-input"
						type="text"
						placeholder="enter username"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<span className="form-lable">Email</span>
					<input
						className="form-input"
						type="text"
						placeholder="enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<span className="form-lable">New Password</span>
					<input
						className="form-input"
						type="text"
						placeholder="enter new password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<span className="form-lable">Confirm Password</span>
					<input
						className="form-input"
						type="text"
						placeholder="re-enter password"
						value={cpassword}
						onChange={(e) => setCpassword(e.target.value)}
					/>
				</div>
				<div>
					<span className="form-lable">Mobile Number</span>
					<input
						className="form-input"
						type="text"
						placeholder="enter number"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
				</div>
				<button className="register-btn" onClick={registerfn}>
					Register
				</button>
				<span className="login-span">
					Have an account ?
					<li
						onClick={() => {
							LoginpageDispathcer();
							ClearDispathcer();
						}}
					>
						Login
					</li>
				</span>
			</div>
		</>
	);
};

export default Registration;
