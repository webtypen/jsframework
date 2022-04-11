module.exports = {
    default: "default",

    guards: {
        default: {
            driver: "passport-jwt",
            model: require("../app/Models/User"),
            secret: env("APP_AUTH_SECRET", "secret_change_here"),
            // loginPath: "/api/users/login",
        },
    },
};
