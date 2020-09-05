import React from "react";
const Startup = ({ value }) => {
	const { nextStep, data } = value;
	return (
		<div className="startup">
			<h1 className="hey"> Hey.... {data.user.name}</h1>
			<h3 className="step">
				Set up your profile in just 2 simple step....
			</h3>
			<h3 className="next">Please continue for the next process</h3>
			<button className="setupbtn" onClick={nextStep}>
				Continue
			</button>
		</div>
	);
};

export default Startup;
