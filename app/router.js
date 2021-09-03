import Router from "express";
import usersController from "./controller.js";

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
    const newUser = await usersController.add(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400);
  }
});

export default router;
