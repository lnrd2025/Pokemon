const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7200;

app.use(express.json());
app.use(express.static(path.join(__dirname, "SRC", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "SRC", "views", "homePokemon.html"));
});

app.listen(PORT, () => {
  console.log(`Aplicación disponible en http://localhost:${PORT}`);
});
