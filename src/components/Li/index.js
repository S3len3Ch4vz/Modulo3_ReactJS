import React from 'react'

//Importación de HOOK
//import {useNavigate} from 'react-router-dom'
function Li({text , buttonText, buttonText2, callback}) {
    
 ///   const navigate = useNavigate();

    return (
        
        <div>
            {text}
            
			<button onClick={callback}>{buttonText} </button>
            <button onClick={callback}>{buttonText2} </button>
        </div>
    )
}

export default Li;
