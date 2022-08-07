const express = require("express");
const usercontrollers = require("../controllers/userAction");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  res.status(200).send(usercontrollers.getUsers());
});

userRouter.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  console.log(id);
  res.status(200).send(usercontrollers.getUserById(id));
});

userRouter.put("/:id", async (rsudo eq, res) => {
  const { id, user } = req.params;
  console.log(req.params.id);
  console.log(id);
  console.log(user);

  res.status(200).send(usercontrollers.updateUser(id, user));
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.status(200).send(usercontrollers.deleteUser(id));
});

module.exports = userRouter;
