import { useState } from "react";

function Forms () {
  const [input1, setInput1] = useState("asdedjsi");
  const [input2, setInput2] = useState(0); 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    };

  return (
   <div> 
        <form onSubmit={handleSubmit}>
         <div> 
             <label htmlFor="input1">Input:</label>
             <input 
                    id="input1"
					onChange={(e) => setInput1(e.target.value)}
					value={input1}
             />
             <input
						type={"number"}
						id="input2"
						onChange={(e) => setInput2(e.target.value)}
						value={input2}
					/>
					<button type="submit">
						Enviar
					</button>
         </div>
            Cantidad: {input2}
        </form>
   </div>

  )


}

export default Forms;