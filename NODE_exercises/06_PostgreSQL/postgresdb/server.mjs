import express from "express"
import "express-async-errors"
import morgan from "morgan"
import pgPromise from "pg-promise"

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const app = express()
const port = 3001

app.use(express.json());

app.use(morgan("dev"));


async function setupDb() {
    try {
        await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE IF NOT EXISTS planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL UNIQUE
        );
    `);
        await db.none(`INSERT INTO planets (name) VALUES ('Earth') ON CONFLICT (name) DO NOTHING`);
        await db.none(`INSERT INTO planets (name) VALUES ('Mars') ON CONFLICT (name) DO NOTHING`);

    } catch (error) {
        console.error("Error setting up the database:", error);
    }
}



//GET /planets
async function getAllPlanets() {
    app.get("/api/planets", async (req, res) => {
        try {
            const planets = await db.many(`SELECT * FROM planets;`);
            console.log(planets)
            res.status(200).json(planets);
        } catch (error) {
            res.status(500).json({ msg: 'Internal Server Error' })
        }
    });
}

//GET /planets/:id
async function getOnePlanet() {
    app.get("/api/planets/:id", async (req, res) => {
        try {
            const { id } = req.params

            const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=$1;`, id);
            console.log(planet)
            res.status(200).json(planet);
        } catch (error) {
            res.status(500).json({ msg: 'Internal Server Error' })
        }
    });
}

//POST /planets
async function createPlanet() {
    app.post("/api/planets", async (req, res) => {
        const { name } = req.body
        const newPlanet = { name }

        if (newPlanet.error) {
            return res.status(400).json({ msg: newPlanet.error });
        } else {
            await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
            console.log(newPlanet)
            res.status(201).json({ msg: "Planet Added" });
        }
    })
}

//PUT /planets/:id
async function updatePlanet() {
    app.put("/api/planets/:id", async (req, res) => {
        const { id } = req.params;
        const { name } = req.body
        try {
            await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name])
            res.status(200).json({ msg: "Planet Updated" })
        } catch (error) {
            console.error("Error updating planet:", error);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    })
}

//DELETE /planets/:id
async function deletePlanet() {
    app.delete("/api/planets/:id", async (req, res) => {
        const { id } = req.params;
        const { name } = req.body
        try {
            await db.none(`DELETE FROM planets WHERE id=$1`, [id, name])
            res.status(200).json({ msg: "Planet Deleted" })
        } catch (error) {
            console.error("Error updating planet:", error);
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    })
}

setupDb().then(() => {
    getAllPlanets();
    getOnePlanet();
    createPlanet();
    updatePlanet();
    deletePlanet();
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`);
    });
}).catch(error => {
    console.error("Error during setup:", error);
});





