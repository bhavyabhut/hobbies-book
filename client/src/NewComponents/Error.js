import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.js";

const Errors = () => {
	const { data } = useContext(GlobalContext);

	return <div className="error">{data.error.msg}</div>;
};
export default Errors;
