import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'GITHUB_PAGES')
  return {
    plugins: [react()],
    base: env.GITHUB_PAGES ? '/lpb-react-irradev-portfolio/' : '/',
  }
})
