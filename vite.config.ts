import { PRICING_PACKAGES } from './src/data/content';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), {
      name: 'redrush-content-metadata',
      transformIndexHtml(html) {
        const starter = PRICING_PACKAGES[0];
        const growth = PRICING_PACKAGES[PRICING_PACKAGES.length - 1];
        return html.replaceAll('%STARTER_PRICE%', starter.price)
          .replaceAll('%PRICE_RANGE%', `${starter.price} - ${growth.price}`)
          .replaceAll('%OFFERS%', JSON.stringify(PRICING_PACKAGES.map(p => ({
            '@type': 'Offer', name: `Paket ${p.name}`, price: p.numericPrice,
            priceCurrency: 'IDR', description: p.tagline
          }))));
      }
    }],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
