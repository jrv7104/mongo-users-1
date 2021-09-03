import Router from "express";
import usersController from "./controller.js";
import userModel from "./model.js";

const router = new Router();

// Not needed for now
router.get("/", async (_, res) => {
  try {
    const users = await usersController.index();
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const validatedUser = userModel.createUser(req.body);
    const newUser = await usersController.add(validatedUser);
    res.status(201).json(newUser);
  } catch (error) {
    if(error.message.startsWith("User")) {
      res.status(400).send(error.message);
    } else {
    res.status(500).send(error.message);
    }
  }
});

export default router;
