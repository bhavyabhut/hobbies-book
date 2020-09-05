import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.js";

const Success = () => {
	const { data } = useContext(GlobalContext);

	return <div className="success">{data.success.msg}</div>;
};
export default Success;
