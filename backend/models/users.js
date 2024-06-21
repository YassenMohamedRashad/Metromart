const Sequelize = require( 'sequelize' );
const { sequelize } = require( '../data/dbconn' );
const { DataTypes } = require( 'sequelize' );

const User = sequelize.define( 'users', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING( 255 ),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING( 255 ),
    allowNull: false,
    unique: "email"
  },
  password: {
    type: DataTypes.STRING( 255 ),
    allowNull: false
  },
  address1: {
    type: DataTypes.STRING( 255 ),
    allowNull: false
  },
  address2: {
    type: DataTypes.STRING( 255 ),
    allowNull: true
  },
  phone_number: {
    type: DataTypes.STRING( 255 ),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn( 'current_timestamp' )
  }
  ,
  updated_on: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn( 'current_timestamp' )
  },
  gender: {
    type: DataTypes.ENUM( 'male', 'female' ),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  token: {
    type: String,
  }
}, {
  sequelize,
  tableName: 'users',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "email",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "email" },
      ]
    },
  ]
} );

// sequelize.sync();
module.exports = User;
