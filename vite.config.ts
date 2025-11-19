import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './', // Critical for GitHub Pages and relative paths
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['daggerheart-icon.svg'], // Include our new icon
      devOptions: {
        enabled: true
      },
      manifest: {
        id: 'daggerheart-tracker-app', // Unique ID to prevent installation conflicts
        name: 'Daggerheart Tracker',
        short_name: 'DH Tracker',
        description: 'Offline Character Tracker',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        scope: '.',      // Defines the navigation scope of this PWA context
        start_url: '.',  // Relative path to ensure it opens the index.html in current folder
        orientation: 'portrait',
        icons: [
          {
            src: 'daggerheart-icon.svg', // Use the SVG we just created
            sizes: '192x192 512x512',    // SVG scales to any size
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        // Clean up old caches to ensure new version loads correctly
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
      }
    })
  ],
});