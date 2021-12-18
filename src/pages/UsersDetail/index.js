import React from 'react';
import { useState, useEffect } from 'react';

//importar Hook

import {useParams} from "react-router-dom";
import {getUser} from "../../services/users";

function UsersDetail() {
    const [user, SetUser] = useState({});
    const params = useParams();

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
        </div>
    )
}
export default UsersDetail;
