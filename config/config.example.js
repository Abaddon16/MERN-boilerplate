// Copy this file as config.js in the same folder, with the proper database connection URI.

const user='';
const pass='';
const addr='';
const port='';
const db='';
const auth='';

module.exports={
	db: `mongodb://${user}:${pass}@${addr}:${port}/${db}?authSource=${auth}`,
	db_dev: `mongodb://${user}:${pass}@${addr}:${port}/${db}?authSource=${auth}`,
};
