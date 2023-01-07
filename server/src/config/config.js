require("dotenv").config();

module.exports = Object.freeze({
	PORT: process.env.PORT,
	DB: process.env.DB_URI,
});
