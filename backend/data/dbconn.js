require("dotenv").config();
const { Sequelize } = require("sequelize");
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const Allowed_ip = process.env.ALLOWED_IP;
const Admins_ip = process.env.ADMINS_IP;
const Allowed_ips = JSON.parse(Allowed_ip);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	dialect: "mysql",
	host: DB_HOST,
});

const connection = async () => {
	try {
		await sequelize.authenticate();
		console.log("successfully connected to database");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { sequelize, connection, Admins_ip, Allowed_ips };
