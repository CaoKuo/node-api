// Process env
const env = (process.env.NODE_ENV || 'development') as 'development' | 'test' | 'production'

// default config
const defaultConfig = {
    env: env,
    PORT: 5050,
}
  
export default defaultConfig