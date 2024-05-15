import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(express.json());

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
  {
    id: 2,
    name: "Mars",
  },
  //added new planet for not confusing with video lesson example
  {
    id: 3,
    name: "Venus",
  },
];

//GET /api/planets: return all planets (JSON) with 200
app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);

  console.log(planets);
});

//GET /api/planets/:id: return a planet (JSON) by id with 200
app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);

  console.log(planet);
});

// POST /api/planets: create a planet,
// return only 201 code and a success JSON with key msg
app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  console.log(planets);
  res.status(201).json({ msg: "Planet Added" });
});

// PUT /api/planets/:id: update a planet by id,
// return only 200 code and a success JSON with key msg
app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  console.log(planets);
  res.status(200).json({ msg: "Planet Updated" });
});

// DELETE /api/planets/:id: delete a planet by id, 
// return only 200 code and a success JSON with key msg
app.delete("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  
  planets = planets.filter((p) => (p.id !== Number(id)));

  console.log(planets);
  res.status(200).json({ msg: "Planet Deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
