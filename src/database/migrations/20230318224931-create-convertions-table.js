'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('convertions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      from_currency_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      to_currency_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      from_currency_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      to_currency_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      from_currency_value: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL
      },
      to_currency_value: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('convertions')
  }
};
