import pgPromise from "pg-promise"
import dotenv from "dotenv"

dotenv.config()

const pgp = pgPromise()

const db = pgp({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

async function setupDb() {
  try {
    await db.none(`
    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
        id SERIAL NOT NULL PRIMARY KEY,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
    )


  `);

  await db.none(`INSERT INTO users (username,password) VALUES ('furanchesuko', 'prova')`)

    console.log('Database setup complete')
  } catch (error) {
    console.error('Error setting up the database:', error);
  }
}

setupDb();

export { db };
