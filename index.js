import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

//all routes in ther routes folder will start with /users route
app.use("/users", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
