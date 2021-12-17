import { Base_URL } from "../utils/constants";

const Users_PATH = "users.json";

const PostUser = async (data) => {
    const response = await fetch (`${Base_URL}${Users_PATH}`, {
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

const getUsers = async () => {
	const response = await fetch(`${Base_URL}${Users_PATH}`);
	return await response.json();
};


export {PostUser, getUsers}; 

