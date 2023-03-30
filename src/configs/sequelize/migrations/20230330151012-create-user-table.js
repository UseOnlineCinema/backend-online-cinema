'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable(
        'Users',
        {
          id: {
            type: Sequelize.STRING,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
          },
          username: Sequelize.STRING,
          password: Sequelize.STRING,
          email: Sequelize.STRING,
          role: {
            type: Sequelize.ENUM,
            values: ['ADMIN', 'USER'],
          },
          createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
          updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
          deletedAt: {
            type: Sequelize.DATE,
            allowNull: true,
          },
        },
        { transaction },
      );

      queryInterface.addConstraint(
        'Users',
        {
          fields: ['email'],
          type: 'unique',
          name: 'user_email_unique',
        },
        { transaction },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
