const { sequelize } = require("../data/dbconn");
const { DataTypes } = require("sequelize");

const Products = sequelize.define(
	"products",
	{
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: "categories",
				key: "id",
			},
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		discount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		rate: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		image_path: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "products",
		timestamps: false,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "id" }],
			},
			{
				name: "category_id",
				using: "BTREE",
				fields: [{ name: "category_id" }],
			},
		],
	}
);

module.exports = Products;
