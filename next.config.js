/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */

// `next/image`, hostname "media.licdn.com" is not configured under images in your `next.config.js`
const config = {
    images: {
        domains: ["media.licdn.com"],
    },
};

export default config;
