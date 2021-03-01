module.exports = {
  type: process.env.DATABASE_CONNECTION,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: [
    "src/entity/**/*.ts"
  ],
  migrations: [
    "src/database/migration/**/*.ts"
  ],
  cli: {
    migrationsDir: "src/database/migration"
  }
}
