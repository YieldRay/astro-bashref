import { defineConfig } from "astro/config";
import { base } from "./deploy.config.mjs";

// https://astro.build/config
export default defineConfig({
    trailingSlash: "always",
    base,
});
