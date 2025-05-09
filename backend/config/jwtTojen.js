var jwt = require("jsonwebtoken");
exports.genratejwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
