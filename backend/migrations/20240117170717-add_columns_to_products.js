"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn("products", "discount", {
			type: Sequelize.INTEGER,
		});
		await queryInterface.addColumn("products", "rating", {
			type: Sequelize.INTEGER,
		});
		await queryInterface.addColumn("products", "stock", {
			type: Sequelize.INTEGER,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn("products", "discount");
		await queryInterface.removeColumn("products", "rating");
		await queryInterface.removeColumn("products", "stock");
	},
};
