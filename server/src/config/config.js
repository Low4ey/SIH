require("dotenv").config();

module.exports = Object.freeze({
	PORT: process.env.PORT,
	DB: process.env.DB_URI,
	ACCESS_TOKEN_PRIVATE_KEY: process.env.ATPK,
	REFRESH_TOKEN_PRIVATE_KEY: process.env.RTPK
});
