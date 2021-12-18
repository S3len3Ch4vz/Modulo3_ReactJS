import React from 'react'

//Importación de HOOK
import {useNavigate} from 'react-router-dom'
function Li({id, firstName, lastName}) {
    
    const navigate = useNavigate();

    return (
        <li onClick={(e) => navigate(`/users/${id}`)}>
			{firstName} 
			{lastName} 
		</li>
    )
}

export default Li;
