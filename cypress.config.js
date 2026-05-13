const { defineConfig } = require("cypress");
require("dotenv").config();

const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureCypress(on, config);

            return config;
        },

        baseUrl: process.env.BASE_URL,

        env: {
            standardUsername: process.env.STANDARD_USERNAME,
            visualUsername: process.env.VISUAL_USERNAME,
            incorrectUsername: process.env.INCORRECT_USERNAME,
            password: process.env.PASSWORD,
            incorrectPassword: process.env.INCORRECT_PASSWORD,
            mercadoLibreApiUrl: process.env.MERCADO_LIBRE_API_URL,
        },
    },
});
