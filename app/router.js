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
    // TODO: Send the errors back to the client
    // TODO: Differentiate between 400 and 500 errors
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const validatedUser = userModel.createUser(req.body);
    const newUser = await usersController.add(validatedUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
