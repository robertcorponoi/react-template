import preval from "preval.macro";

// Exports a static version of our Tailwind config mixed with the default 
// Tailwind config.
// Exporting it using `preval` allows us to get the static config without 
// pulling in Tailwind's build tooling.
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
export default preval`
    const resolveConfig = require("tailwindcss/resolveConfig");
    const tailwindConfig = require("../../tailwind.config.js");

    module.exports = resolveConfig(tailwindConfig);
`;
