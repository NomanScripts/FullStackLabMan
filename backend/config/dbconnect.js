const { default: mongoose } = require("mongoose");
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_DB_URL);
    console.log(process.env.MONGO_DB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("database error");
  }
};
module.exports = dbConnect;
