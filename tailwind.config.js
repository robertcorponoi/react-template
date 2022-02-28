/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
    // An array of paths to the template files that use Tailwind class names.
    // https://tailwindcss.com/docs/content-configuration
    content: [
        "./src/**/*.js",
        "./src/**/*.ts",
        "./src/**/*.tsx",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
