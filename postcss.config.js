module.exports = {
    plugins: {
        // Uses Tailwind as a PostCSS plugin.
        // https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin
        tailwindcss: {},
        // PostCSS plugin to parse CSS and add ventor prefixes to CSS rules using values from Can I Use.
        // https://github.com/postcss/autoprefixer
        autoprefixer: {},
    },
};
