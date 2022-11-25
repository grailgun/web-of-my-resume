require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DEV_DB_USERNAME,
		password: process.env.DEV_DB_PASSWORD,
		database: process.env.DEV_DB_NAME,
		host: process.env.DEV_DB_HOSTNAME,
		dialect: "postgres",
		dialectOptions: {
			ssl: {
				require: true, // This will help you. But you will see nwe error
				rejectUnauthorized: false, // This line will fix new error
			},
		},
	},
	test: {
		username: process.env.CI_DB_USERNAME,
		password: process.env.CI_DB_PASSWORD,
		database: process.env.CI_DB_NAME,
		host: process.env.CI_DB_HOSTNAME,
		dialect: "postgres",
		dialectOptions: {
			ssl: {
				require: true, // This will help you. But you will see nwe error
				rejectUnauthorized: false, // This line will fix new error
			},
		},
	},
	production: {
		username: process.env.PROD_DB_USERNAME,
		password: process.env.PROD_DB_PASSWORD,
		database: process.env.PROD_DB_NAME,
		host: process.env.PROD_DB_HOSTNAME,
		dialect: "postgres",
		dialectOptions: {
			ssl: {
				require: true, // This will help you. But you will see nwe error
				rejectUnauthorized: false, // This line will fix new error
			},
		},
	},
};
