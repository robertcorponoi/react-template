/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
    // An array of paths to the template files that should be purged of unused styles.
    // https://tailwindcss.com/docs/optimizing-for-production
    purge: ["./src/**/*.js", "./src/**/*.ts", "./src/**/*.tsx"],
    // If set to media, dark mode classes, like `dark:text-white` will take precedence over unprefixed classes.
    // If set to class, dark mode classes will be applied whenever the `dark` class is present in the HTML tree.
    // https://tailwindcss.com/docs/dark-mode
    darkMode: "media",
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
