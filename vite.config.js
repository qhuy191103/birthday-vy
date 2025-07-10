import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 👇 THÊM base ở đây — thay 'ten-repo-cua-ban' bằng tên repo GitHub của bạn
export default defineConfig({
  base: '/birthday-vy/',
  plugins: [tailwindcss(), react()],
})
