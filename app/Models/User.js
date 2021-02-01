const { Model } = require("webtypen-jsframework-core");

class User extends Model {
    table = "users";
}

module.exports = User;
