function getUserData(name = '', surname = '') {
	return {
		name,
		surname,
		fullname() {
			return `${this.name} ${this.surname}`
		}
	}
}

const person = getUserData('Jake', 'Willignham');
const fullname = person.fullname();

console.log(fullname);
