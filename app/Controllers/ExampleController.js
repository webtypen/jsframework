const moment = require("moment");

exports.output = async (req, res) => {
    return res.status(200).send({
        status: "success",
        message: "Exmpample-Controller test output",
        moment: moment().format(),
    });
};
