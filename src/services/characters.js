import {Rick_and_Morty_API} from "../utils/constants";

const Characters_API = "character";

const listCharacters = async (page = "") => {
    const response = await fetch(
		`${Rick_and_Morty_API}${Characters_API}?${page}`
	);
	return await response.json();
}

export {listCharacters}