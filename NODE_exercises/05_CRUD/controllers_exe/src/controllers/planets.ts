import { Request, Response } from "express";

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

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);

  console.log(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  //Array.prototype.find higher-order function to Get One.
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);

  console.log(planet);
};

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  //Spread operator ([...planets]) to Create.
  planets = [...planets, newPlanet];

  console.log(planets);
  res.status(201).json({ msg: "Planet Added" });
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  //Array.prototype.map higher-order function to Update.
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  console.log(planets);
  res.status(200).json({ msg: "Planet Updated" });
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  //Array.prototype.filter higher-order function to Delete.
  planets = planets.filter((p) => p.id !== Number(id));

  console.log(planets);
  res.status(200).json({ msg: "Planet Deleted" });
};

export { getAll, getOneById, create, updateById, deleteById };
