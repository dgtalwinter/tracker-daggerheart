import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['daggerheart-icon.svg'],
      manifest: {
        name: 'Daggerheart Tracker',
        short_name: 'DH Tracker',
        description: 'Offline Character Tracker',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        scope: './',
        start_url: './',
        orientation: 'portrait',
        icons: [
          {
            src: 'daggerheart-icon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
});