import express from "express";
import { v4 as uuidv4 } from "uuid";

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

  //  const userId =  uuidv4();

  // const userWithId = { ...user,id:userId  }

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName}  added to the database `);
});

export default router;
