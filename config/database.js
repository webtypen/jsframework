module.exports = {
    // Default database-connection
    default: "default",

    // Database-Connections
    connections: {
        default: {
            driver: "mongodb",
            url: env("DB_URL"),
        },

        // mysql: {
        //     driver: "mysql",
        //     host: env("DB_HOST"),
        //     port: env("DB_PORT", 3306),
        //     database: env("DB_DATABASE"),
        //     user: env("DB_USER"),
        //     password: env("DB_PASSWORD"),
        // },
    },

    // Name of the migrations-table
    migrations: "migrations",
};
