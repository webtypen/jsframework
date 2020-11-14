const { Router } = require("webtypen-jsframework");
const User = require("../app/Models/User");

Router.get("/", (req, res) => {
    res.send({ status: "Your application is running :)" });
});

Router.get("/test", (req, res) => {
    const user = new User();
    user.name = "Benedict Romp";
    user.email = "b.romp@webtypen.de";
    user.password = "COMING SOOON";
    user.is_active = true;
    user.roles = ["ROLE_ADMIN"];
    user.save();

    res.send({ status: "success" });
});
