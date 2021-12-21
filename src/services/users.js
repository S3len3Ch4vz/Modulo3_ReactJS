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

const getUser = async (id) => {
	const response = await fetch(`${Base_URL}users/${id}.json`);
	return await response.json();
};

const updateUser = async (id, data) => {
	const response = await fetch(`${Base_URL}users/${id}.json`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		// body: data,
	});
	return await response.json();
};

const deleteUser = async (id) => {
	const response = await fetch (`${Base_URL}users/${id}.json`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},

	});
	return await response;
}

export {PostUser, getUsers, getUser, updateUser, deleteUser}; 

