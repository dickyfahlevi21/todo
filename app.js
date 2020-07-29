const {
    Sequelize
} = require('sequelize');

/**
 * 
 * Masih gagal ditahap install my sql diubuntu 20.04
 * ERROR 2059 (HY000): Authentication plugin 'caching_sha2_password'
 * cannot be loaded: /usr/local/mysql/lib/plugin/caching_sha2_password.so:
 * cannot open shared object file: No such file or directory
 */








// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
// });

// // Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }