const express = require("express");
const connectToDb = require("./database/db");
const bookRoutes = require("./routes/book-routes")
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = process.env.PORT || 5000

//connect to db
connectToDb();

//middleware
app.use(express.json()); 

//routes
app.use("/api/books", bookRoutes); 

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
