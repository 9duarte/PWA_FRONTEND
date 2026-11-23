import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const backendUrl = 'http://localhost:3000';

  return {
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          // Suppress deprecation warnings from Bootstrap
          silenceDeprecations: ['global-builtin', 'import'],
          quietDeps: true,
        }
      }
    },
    server: {
      proxy: {
        "/api": {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/socket.io": {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
        "/images": {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },

    // ========== CONFIGURAÇÃO DOS TESTES ==========
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.js',
    },
  };
});