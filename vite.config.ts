
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';

// Plugin to serve ICON folder in dev and copy it in build
const iconPlugin = () => {
  return {
    name: 'icon-plugin',
    configureServer(server) {
      // Serve ICON folder during development
      server.middlewares.use('/ICON', (req, res, next) => {
        // Remove query string and hash, and sanitize the path
        const urlPath = (req.url?.split('?')[0]?.split('#')[0] || '').replace(/^\//, '');
        const iconPath = path.join(__dirname, 'ICON', urlPath);
        
        // Ensure the path is within the ICON directory (security check)
        const iconDir = path.resolve(__dirname, 'ICON');
        const resolvedPath = path.resolve(iconPath);
        if (!resolvedPath.startsWith(iconDir)) {
          return next();
        }
        
        if (existsSync(iconPath) && statSync(iconPath).isFile()) {
          res.setHeader('Content-Type', iconPath.endsWith('.png') ? 'image/png' : 'image/*');
          const file = readFileSync(iconPath);
          res.end(file);
        } else {
          next();
        }
      });
    },
    generateBundle() {
      // Copy ICON folder to build output
      const iconDir = path.resolve(__dirname, 'ICON');
      const outIconDir = path.resolve(__dirname, 'build/ICON');
      
      if (existsSync(iconDir)) {
        if (!existsSync(outIconDir)) {
          mkdirSync(outIconDir, { recursive: true });
        }
        
        const files = readdirSync(iconDir);
        files.forEach(file => {
          const srcPath = path.join(iconDir, file);
          const destPath = path.join(outIconDir, file);
          if (statSync(srcPath).isFile()) {
            copyFileSync(srcPath, destPath);
          }
        });
      }
    },
    writeBundle() {
      // Copy index.html to 404.html for SPA routing support on static hosts
      const indexPath = path.join(__dirname, 'build', 'index.html');
      const notFoundPath = path.join(__dirname, 'build', '404.html');
      
      if (existsSync(indexPath)) {
        copyFileSync(indexPath, notFoundPath);
      }
    }
  };
};

export default defineConfig({
  plugins: [react(), iconPlugin()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });