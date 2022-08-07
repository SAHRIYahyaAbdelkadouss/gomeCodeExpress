const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouts");

const app = express();

app.use(bodyParser.json());
app.use("/users", userRouter);

app.get("/", async (req, res) => {
  res.json({ message: "hello world" });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server is listening on port", PORT));
