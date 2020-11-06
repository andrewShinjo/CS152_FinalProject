class Person {

	/* Constructor for person class. Consumes a username and a password.
	** username = the username
	** password = the password
	*/
	constructor person(username, password) {
		this.username = username;
		this.password = password;
	}

	/* Returns the person's username.
	**
	*/
	function getUserName() {
		return username;
	}
	
	/* Return the person's password.
	**
	*/
	function getPassword() {
		return password;
}