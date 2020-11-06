class MessageBox {
	/* MessageBox constructor consumes date, person, msg_unread, and priority.
	** date = date of last message sent
	** person = person user is communicating with
	** msg_unread = number of unread messages
	*/
	constructor (date, person, msg_unread) {
		this.date = date;
		this.person = person;
		this.msg_unread = msg_unread;
	}
	
	/* Returns the date of the last message sent.
	**
	*/
	function getDate() {
		return date;
	}
	
	/* Returns the person the user is communicating with.
	**
	*/
	function getPerson() {
		return person;
	}
	
	/* Returns the number of messages unread.
	*
	*/
	function getMsgUnread() {
		return msg_unread;
	}
}