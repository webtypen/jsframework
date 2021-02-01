module.exports = {
    default: "default",

    guards: {
        default: {
            driver: "passport-jwt",
            model: require("../app/Models/User"),
            secret: env("APP_AUTH_SECRET", "secret_j91jasf0j1asfkl"),
            // loginPath: "/api/users/login",
        },
    },
};
