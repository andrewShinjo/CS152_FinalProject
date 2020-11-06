import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mysql = require ('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "db"
});

conn.connect (function (err) {
	if (err) {
		throw err;
	} else {
		console.log ("Connected to MySQL Server");
	}
});

conn.end();

function sign_up() {
	var un = document.getElementById("username").value;
	var pw = document.getElementById("password").value;
	var confirmed_pw = document.getElementById("confirmPassword").value;
	
	console.log(un);
	console.log(pw);
	console.log(confirmed_pw);
}

function sign_in() {
	
}