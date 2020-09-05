import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext.js";
const Navbar = (props) => {
	const { data, dispatch } = useContext(GlobalContext);
	const LoginpageDispathcer = () => {
		dispatch({ type: "LOGINPAGE" });
	};
	const RegistrationpageDispathcer = () => {
		dispatch({ type: "REGISTRACTIONPAGE" });
	};
	const LogoutDispathcer = () => {
		dispatch({ type: "LOGOUT" });
	};
	const ClearDispathcer = () => {
		dispatch({ type: "CLEAR_ERROR" });
	};
	const SuccessrDispathcer = (payload) => {
		dispatch({ type: "SUCCESS", payload });
	};
	return (
		<nav className="navbar" onClick={ClearDispathcer}>
			<div
				style={{ cursor: "pointer" }}
				className="logo"
				onClick={() => {
					if (data.user._id) {
						props.history.push("/");
						dispatch({
							type: "ITEMPAGE",
						});
					}
				}}
			>
				{data.page.item ? `Welcome ${data.user.name}` : "Welcome Guest"}
			</div>
			<ul className="navbar-ul">
				{data.page.item ? (
					<>
						<li>
							<Link
								to="/details"
								style={{
									color: "White",
									textDecoration: "none",
								}}
							>
								Profie
							</Link>
						</li>
						<li
							onClick={() => {
								LogoutDispathcer();
								props.history.push("/");
								SuccessrDispathcer("Successful logout");
							}}
						>
							Logout
						</li>
					</>
				) : (
					<>
						<li
							onClick={() => {
								RegistrationpageDispathcer();
								ClearDispathcer();
							}}
						>
							Registration
						</li>
						<li
							onClick={() => {
								LoginpageDispathcer();
								ClearDispathcer();
							}}
						>
							Login
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
