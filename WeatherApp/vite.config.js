import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from "url";
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "src");

dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    port: process.env.PORT,
  },
  resolve: {
    alias: {
      "@": rootDir,
      "@components": resolve(rootDir, "components"),
      "@ui": resolve(rootDir, "components/UI"),
      "@services": resolve(rootDir, "services"),
      "@store": resolve(rootDir, "store"),
      "@pages": resolve(rootDir, "pages"),
      "@templates": resolve(rootDir, "templates"),
      "@api": resolve(rootDir, "api"),
      "@utils": resolve(rootDir, "utils"),
    }
  } 
})
