const { Router } = require("@webtypen/jsframework-core");
const ExampleController = require("../app/Controllers/ExampleController");

Router.get("/", ExampleController.output);
