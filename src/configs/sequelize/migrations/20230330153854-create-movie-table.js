'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable(
        'Movies',
        {
          id: {
            type: Sequelize.STRING,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
          },
          name: Sequelize.STRING,
          synopsis: Sequelize.STRING,
          duration: Sequelize.INTEGER,
          cast: Sequelize.STRING,
          url: Sequelize.STRING,
          createdAt: Sequelize.DATE,
          deletedAt: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
          },
        },
        {
          transaction,
        },
      );
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  },
};
