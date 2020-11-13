const { Router } = require("webtypen-jsframework");

Router.get("/", (req, res) => {
    res.send({ status: "succssess" });
});
