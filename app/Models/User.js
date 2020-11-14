const { Model } = require("webtypen-jsframework");

class User extends Model {
    table = "users";
}

module.exports = User;
