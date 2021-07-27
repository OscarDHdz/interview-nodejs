import express from "express";
import todos from './todos.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send();
  res.json(todos);
});

export default router;