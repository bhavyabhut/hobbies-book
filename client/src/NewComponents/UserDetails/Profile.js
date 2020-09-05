import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext.js";
import "./Profile.css";
const Profile = () => {
	const {
		data: { user },
	} = useContext(GlobalContext);
	return (
		<div className="profilediv">
			<div className="profilemain">
				<div className="profileimg"></div>
				<div className="profiledetails">
					<div className="profileitem">
						<span>Name</span>
						<h3>{user.fullname}</h3>
					</div>
					<hr />
					<div className="profileitem">
						<span>Email</span>
						<h3>{user.email}</h3>
					</div>
					<hr />
					<div className="profileitem">
						<span>Bday</span>
						<h3>{user.bdate.slice(0, 10)}</h3>
					</div>
				</div>
			</div>
			<hr />
			<div className="profileother">
				<div className="profileotheritem">
					<span>Mobile</span>
					<h3>{user.number}</h3>
				</div>
				<div className="profileotheritem">
					<span>city</span>
					<h3>{user.city}</h3>
				</div>
				<div className="profileotheritem">
					<span>state</span>
					<h3>{user.state}</h3>
				</div>
				<div className="profileotheritem">
					<span>Country</span>
					<h3>{user.country}</h3>
				</div>
			</div>
		</div>
	);
};

export default Profile;
