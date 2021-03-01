module.exports = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
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
