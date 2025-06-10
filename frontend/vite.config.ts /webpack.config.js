import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Use Fast Refresh in development
      fastRefresh: true,
    }),
  ],
  resolve: {
    alias: {
      // Allow absolute imports from /src
      '@': path.resolve(__dirname, './src'),
      // Or specific folders
      components: path.resolve(__dirname, './src/components'),
      services: path.resolve(__dirname, './src/services'),
    },
  },
  server: {
    port: 3000,
    open: true,
    // Proxy API calls to your ASP.NET Core backend
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'https://localhost:5001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        // TailwindCSS and Autoprefixer
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      // Externalize dependencies if deploying separately
      external: [],
      output: {
        // Keep hashed filenames for long-term caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  define: {
    // Make environment variable available in code
    'process.env': process.env,
  },
});

