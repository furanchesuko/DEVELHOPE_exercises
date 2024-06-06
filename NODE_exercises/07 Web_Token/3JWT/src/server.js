import morgan from "morgan";
import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
import cors from "cors"
import { logIn, signUp, logOut } from "./controllers/users.js"
import authorize from "./authorize.js";
import "./passport.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

const port = process.env.PORT || 4000

app.post("/api/users/login", logIn)

app.post("/api/users/signup", signUp)

app.get("/api/users/logout", authorize, logOut)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
