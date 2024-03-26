const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

var corsOptions = {
    origin: ['https://localhost:8081','http://localhost:4200']
};

//middlewares

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routes

const deviceRoutes = require('./Routes/deviceRoutes')

app.use('/api/devices', deviceRoutes)

app.get("/tshirt", (req, res) => {
    res.status(200).send({
        tshirt: "👕",
        size: "large",
    });
});

app.post("/tshirt/:id", (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({
            message: "We need a logo!",
        });
    }
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});

app.listen(PORT, () =>
    console.log(`Server Running on http://localhost:${PORT}`)
);
