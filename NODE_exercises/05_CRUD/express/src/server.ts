import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 4000;

app.use(morgan("dev"));

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);

  console.log(planets);
});

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  //changed planet name for not confusing with video lesson example
  {
    id: 2,
    name: "Venus",
  },
];

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
