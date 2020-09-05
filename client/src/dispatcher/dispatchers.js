import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.js";
export const ErrorDispathcer = (payload) => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "ERROR", payload });
};
export const LoginpageDispathcer = () => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "LOGINPAGE" });
};
export const RegistrationpageDispathcer = () => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "REGISTRACTIONPAGE" });
};
export const LogoutDispathcer = () => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "LOGOUT" });
};
export const AddhobbiDispathcer = (payload) => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "ADD_HOBBI", payload });
};
export const SetbobbiDispathcer = (payload) => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "SET_HOBBI", payload });
};
export const DeletebobbiDispathcer = (payload) => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "DELETE_HOBBI", payload });
};
export const SetuserDispathcer = (payload) => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "SET_USER", payload });
};
export const ClearDispathcer = () => {
	const { dispatch } = useContext(GlobalContext);
	dispatch({ type: "CLEAR" });
};
