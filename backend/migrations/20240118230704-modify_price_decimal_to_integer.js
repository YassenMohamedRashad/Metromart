"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn("products", "price", {
			type: Sequelize.INTEGER,
			allowNull: false,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn("products", "price", {
			type: Sequelize.DECIMAL(10, 2),
			allowNull: false,
		});
	},
};
