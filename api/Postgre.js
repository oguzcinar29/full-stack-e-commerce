import pg from "pg";
import doteenv from "dotenv";
doteenv.config();

const POSTGRES_URL = process.env.POSTGRES_URL;

const db = new pg.Client({
  connectionString: POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
db.connect()
  .then(() => console.log("connected to database"))
  .catch((err) => console.error(err));

export default db;
