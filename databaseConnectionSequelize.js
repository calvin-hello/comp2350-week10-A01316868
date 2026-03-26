require("dotenv").config();

// const is_hosted = process.env.IS_HOSTED || false;
// const dbConfigHosted =
//   "mysql://freedb_2350_main:w1c4poka4*x4w32t@ sql.freedb.tech:3306/freedb_comp2350-A87654321";
// const dbConfigLocal = "mysql://root:Password@localhost/lab_example";

// if (is_hosted) {
//   var databaseConnectionString = dbConfigHosted;
// } else {
//   var databaseConnectionString = dbConfigLocal;
// }
var databaseConnectionString = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
// console.log(databaseConnectionString);
module.exports = databaseConnectionString;