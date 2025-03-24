import { createConnection } from 'mysql2/promise';

async function initializeDatabase() {
  const connection = await createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  // Your database initialization logic here
  console.log('Database connected successfully');
}

initializeDatabase().catch((err) => {
  console.error('Failed to connect to the database:', err);
});
