import React from "react";
import TextField from "material-ui/TextField";
import Them from "material-ui/styles/MuiThemeProvider";
const Persnol = ({ value }) => {
	const { details, handlechange, nextStep } = value;
	return (
		<Them>
			<>
				<TextField
					id="firstname"
					hintText="Enter Your First Name"
					onChange={(e) => {
						handlechange("firstname", e.target.value);
					}}
					value={details.firstname}
				/>
				<br />
				<TextField
					id="lastname"
					hintText="Enter Your Last Name"
					onChange={(e) => {
						handlechange("lastname", e.target.value);
					}}
					value={details.lastname}
				/>
				<br />

				<TextField
					id="bdate"
					type="date"
					label="Birthday"
					onChange={(e) => {
						handlechange("date", e.target.value);
					}}
					value={details.date}
				/>
				<br />
				<button className="setupbtn" onClick={nextStep}>
					Next
				</button>
			</>
		</Them>
	);
};

export default Persnol;
