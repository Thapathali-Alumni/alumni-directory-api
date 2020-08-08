'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Departments', [{
        name: 'Electronics and Computer',
        name_nepali: 'Electronics and Computer',
        description: 'Department of electronics and computer engineering.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Administration',
        name_nepali: 'Prasasan',
        description: 'Department added for administrative purpose',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});

    const depts = await queryInterface.sequelize.query(
      `SELECT id from Departments where name='Electronics and Computer';`
    );
    const deptId = depts[0][0].id;


    await queryInterface.bulkInsert('Programs', [{
        name: 'Electronics and Communication Engineering',
        name_nepali: 'Electronics and Communication Engineering',
        description: 'ECE Program',
        department_id: deptId,
        start_date: new Date(2010, 1, 1),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Computer Engineering',
        name_nepali: 'Computer Engineering',
        description: 'Computer Engineering program',
        department_id: deptId,
        start_date: new Date(2016, 1, 1),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    const programs = await queryInterface.sequelize.query(
      `SELECT id from Programs where name='Electronics and Communication Engineering';`
    );
    const programId = programs[0][0].id;

    const batchId = await queryInterface.bulkInsert('Batches', [{
        name: '067',
        name_nepali: '067',
        description: '067 Batch',
        program_id: programId,
        start_date: new Date(2010, 1, 1),
        end_date: new Date(2014, 1, 1),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '068',
        name_nepali: '068',
        description: '068 Batch',
        program_id: programId,
        start_date: new Date(2011, 1, 1),
        end_date: new Date(2015, 1, 1),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});



    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Departments', [{

    }], {});

    await queryInterface.bulkDelete('Programs', [{

    }], {});

    await queryInterface.bulkDelete('Batches', [{

    }], {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};