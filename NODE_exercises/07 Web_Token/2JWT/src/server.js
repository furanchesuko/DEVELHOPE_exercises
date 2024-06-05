import morgan from "morgan";
import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

const port = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.status(200).json({msg: "hello world"})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
