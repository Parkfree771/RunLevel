import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },

  // 빌드 결과물이 프로젝트 최상위 'dist' 폴더에 생성되도록 설정합니다.
  build: {
    outDir: 'dist',
    emptyOutDir: true, // 빌드 시 기존 dist 폴더를 깨끗하게 비웁니다.
  }
})