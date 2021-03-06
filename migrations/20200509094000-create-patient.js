'use strict';
const bcrypt = require("bcryptjs");
module.exports = module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hash = await bcrypt.hash("default-password-is-to-be-changed", Number(process.env.SALT))
    return queryInterface.bulkInsert('users', [{
      "email_id": "patient@bodhi.com",
      "password": hash,
      "first_name": "Patient",
      "last_name": "I",
      "user_type": "P",
      "contact_no": "+61000000000",
      "dob": "1970-01-01",
      "address": "Bodhi, USA"
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};