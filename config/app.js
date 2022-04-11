module.exports = {
    title: env("APP_TITLE", "application"),
    port: env("APP_PORT", 3000),
    debug: env("APP_DEBUG", false),
    router: {
        prefix: env("APP_ROUTER_PREFIX"),
    },
};
