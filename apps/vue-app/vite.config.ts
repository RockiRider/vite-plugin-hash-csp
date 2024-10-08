import { defineConfig, PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import csp from "vite-plugin-csp-guard";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    csp({
      dev: { run: true, outlierSupport: ["vue"] },
      build: { hash: true },
    }) as PluginOption, //This is a type assertion due to a monorepo issue regarding stylus, this is not needed in a normal project
  ],
  preview: {
    port: 4007,
  },
  server: {
    port: 3007,
  },
});
