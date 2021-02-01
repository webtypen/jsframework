const { Migration } = require("webtypen-jsframework-core");

class CreateAuthStructure extends Migration {
    up() {
        this.createTable("users", (table) => {
            table.increment("id");
            table.string("email", { unique: true });
            table.string("name");
            table.string("password");
            table.text("roles", { nullable: true });
            table.boolean("is_active");
            table.timestamps();
        });
    }
}

module.exports = CreateAuthStructure;
