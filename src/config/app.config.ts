export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 4000,
})