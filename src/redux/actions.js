export const user = (username) => {
	return {
		type: "LOGIN",
		value: username
	}
}

export const updatePlace = (place) => {
	return {
		type: "ADD_PLACE",
		value: place
	}
}

export const removePlace = (index) => {
	return {
			type: 'REMOVE_PLACE',
			value: index
	}
}