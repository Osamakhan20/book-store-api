const mongoos = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoos.connect(process.env.MONGO_URL);
    console.log("Mongodb connect successfully");
  } catch (error) {
    console.error(error, "Mongodb connection failed");
    process.exit(1);
  }
};

module.exports = connectToDb;
