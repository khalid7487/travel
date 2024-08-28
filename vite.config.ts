import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {exportType: 'default', ref: true, svgo: false, titleProp: true},
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@core': '/src/@core',
      api: '/src/api',
      components: '/src/components',
      config: '/src/config',
      hooks: '/src/hooks',
      i18n: '/src/i18n',
      images: '/src/images',
      layouts: '/src/layouts',
      Providers: '/src/Providers',
      routes: '/src/routes',
      Styles: '/src/Styles',
      Themes: '/src/Themes',
      utils: '/src/utils',
      views: '/src/views',
    },
  },
})
