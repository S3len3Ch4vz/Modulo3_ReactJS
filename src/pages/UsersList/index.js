import React from "react";
import { useState ,useEffect} from "react/cjs/react.development";

//Services 
import {getUsers, deleteUser, getUser} from "../../services/users";

//Components 
import Li from "../../components/Li";

//Hook
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";

function UsersList() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [occupation, setOccupation] = useState("");
	const [birthday, setBirthday] = useState("");
	const [users, setUsers] = useState([]);
    
	const params = useParams();
    
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

	useEffect(() => {
		const getId = async () => {
			const { firstName, lastName, gender, occupation, birthday } =
				await getUser(params.userID);
			// console.log(response);
			setFirstName(firstName);
			setLastName(lastName);
			setGender(gender);
			setOccupation(occupation);
			setBirthday(birthday);
		};
		getId();
	}, [params.userID]);

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