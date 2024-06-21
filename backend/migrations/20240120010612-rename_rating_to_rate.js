"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn("products", "rating", "rate");
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameColumn("products", "rate", "rating");
	},
};
