/* eslint-disable no-undef */
// first method (with require):
// require("dotenv").config();

// other method (with import):
import { config } from "dotenv";
config();

// print the values:
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_USER);
