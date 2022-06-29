const createDog = (name, breed) => {
	return {
		name,
		breed
	}
}
const createCat = (name, breed) => {
	return {
		name,
		breed
	}
}
const createPet = (type, name, breed) => {
	if (type === 'cat') {
		return createCat(name, breed)
	} else if (type === 'dog') {
		return createDog(name, breed)
	} else {
		throw new Error('invalid type')
	}
}
