import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const agregarItem = document.getElementById("NuevoItem");
    if ( onclick = agregarItem) {
        res.render("newItem.ejs");
    }
});

app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}.`);
});