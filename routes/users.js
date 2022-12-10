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
  console.log("Hello from Homepage");
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("Post request done");

  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstName}  added to the database `);
});

export default router;
