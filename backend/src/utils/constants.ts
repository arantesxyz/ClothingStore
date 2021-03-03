export default {
  SALT_ROUNDS: 8,
  JWT_SECRET: process.env.JWT_SECRET || 'secret'
}
