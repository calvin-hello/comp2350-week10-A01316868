const mysql = require('mysql2/promise');

const is_hosted = process.env.IS_HOSTED || false;

const dbConfigHosted = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "#Unlimited*7",
	database: "web_user",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_hosted) {
	var database = mysql.createPool(dbConfigHosted);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		