import dotnenv from 'dotenv';
dotnenv.config();

const PORT = process.env.PORT || 3001 || 3002
const MONGOD_DB = process.env.MONGOD_DB;
export { PORT, MONGOD_DB }