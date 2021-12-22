import React from 'react'

// Service
import { deleteUser } from "../../services/users";


//Importación de HOOK
import {useNavigate, useParams} from 'react-router-dom'
function Li({text , buttonText, buttonText2, callback}) {
    
 const navigate = useNavigate();
 const params = useParams();

 const handleDelete = async () => {
    console.error("eliminado");
    await deleteUser(params.userID);
    navigate("/users");
};

    return (
        
        <div>
            {text}
            
			<button onClick={callback}>{buttonText} </button>
            <button onClick={handleDelete}>{buttonText2} </button>
        </div>
    )
}

export default Li;
