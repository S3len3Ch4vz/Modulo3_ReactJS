import React from "react";

// CSS
import "./Input.css";

function Input({ id, label, value, setValue, type="text"}) {
	return (
		<div className="input-container">
			<label className="label" htmlFor={id}>
				{label}:
			</label>
			<input
				id={id}
				className="input"
				onChange={(event) => setValue(event.target.value)}
				value={value}
                type={type}
			/>
		</div>
	);
}

export default Input;
