import React from 'react';
import { useState, useEffect } from 'react';

//importar Hook

import {useNavigate, useParams, Outlet} from "react-router-dom";
import {getUser} from "../../services/users";

//Icons
import Test from "../../Icons/Test";
function UsersDetail() {
    const [user, SetUser] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const get = async () => {
            const response = await getUser(params.userID)
            console.log(response);
            SetUser(response);
        }
        
        get();
    }, [params.userID])

    return (
        <div>
			Hola soy el detalle del usuario: {user?.firstName} {user?.lastName}
			<button onClick={() => navigate(`update`)}>
				<Test />
			</button>
			<br />
			<Outlet />
		</div>
    )
}
export default UsersDetail;
