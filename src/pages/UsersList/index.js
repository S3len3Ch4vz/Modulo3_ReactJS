import React from "react";
import { useState ,useEffect} from "react/cjs/react.development";

//Services 
import {getUsers} from "../../services/users";

//Components 
import Li from "../../components/Li";

//Hook
import {useNavigate} from "react-router-dom";


function UsersList() {

	const [users, setUsers] = useState([]);
    
    
	const navigate = useNavigate();
	useEffect(() => {
		const get = async () => {
			const response = await getUsers();
			const parsedResponse = Object.keys(response).map((key) => {
				const { firstName, lastName } = response[key];
				return {
					id: key,
					firstName,
					lastName,
				};
			});
			setUsers(parsedResponse);
		};
    
    get();	

	}, []);



	return (
	<div>
		<ul>
				{users.map(({ id, firstName, lastName }) => (
					<Li
						key={id}
						text={`${firstName} ${lastName}`}
						buttonText="Detalle"
						buttonText2="Eliminar"
						callback={() => navigate(`${id}`)}
					/>
				))}
			</ul>
	</div>
	);
}
export default UsersList;