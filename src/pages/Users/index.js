import React from "react";
import "../../App.css"
import { Link, Outlet } from "react-router-dom";
function Users() {

	return (
		<>
		<div className="content">
			<h1>Users screen</h1>
			<Outlet/>
		</div>
       <div clasName="aside">
		<nav className="side-nav"> 
		     <Link className="link" to="">
			  List Users
		     </Link>
		        <Link className="link" to="new">
			    Create User
		        </Link>
		</nav>
	</div>
		</>
	
	);
}
export default Users;