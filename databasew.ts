import { createConnection } from 'mysql2/promise';

async function initializeDatabase() {
  const connection = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // Your database initialization logic here
  console.log('Database connected successfully');
}

initializeDatabase().catch((err) => {
  console.error('Failed to connect to the database:', err);
});
