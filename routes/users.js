import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: "23",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: "20",
  },
];

router.get("/", (req, res) => {
  //   console.log(users);
  res.send(users);
});

export default router;
