const {fontFamily} = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["./src/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                ...fontFamily,
                sans: ["montserrat",...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
