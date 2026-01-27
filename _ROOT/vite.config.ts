import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    /* I opted for not using Tailwind because it implements styling over which I have no control on top of my SCSS styling.
    More work for nothing! 
    tailwindcss(),
    */
    react()],
});

