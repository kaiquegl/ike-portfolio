import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const PRERENDER_BINARY_ASSET_PATTERN = /\.(pdf|png|jpe?g|gif|webp|avif|ico|svg|woff2?|ttf|eot|mp4|webm|mp3|zip)$/i;
const PRERENDER_PATH_QUERY_PATTERN = /[?#]/;

const config = defineConfig({
  plugins: [
    devtools(),
    // nitro(), // disabled for netlify deploy work properly
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"]
    }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
        filter: ({ path }) => !PRERENDER_BINARY_ASSET_PATTERN.test(path.split(PRERENDER_PATH_QUERY_PATTERN)[0] ?? path)
      }
    }),
    netlify() as PluginOption,
    viteReact()
  ]
});

export default config;
