import morgan from "morgan";
import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
import cors from "cors"
import { logIn, signUp } from "./controllers/users.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

const port = process.env.PORT || 4000

app.post("/api/users/login", logIn)

app.post("/api/users/signup", signUp)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
