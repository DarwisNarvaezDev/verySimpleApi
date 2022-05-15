const express = require("express");
const cors = require("./cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors);

// Ponle lo que quieras
app.get('/', async(req, res) => {
    const saludo = "hola mundo";
    res.status(200).json(saludo);
})

app.post('/saludame/:nombre', async (req, res) => {
    const { nombre } = req.params
    const { mensaje } = req.body
    res.status(200).json(`Hola, ${nombre}, este es el mensaje: ${mensaje}`)
});

// app.put();
// app.delete();

app.listen(8080, () => {
    console.log("Arriba!");
})