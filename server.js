import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.static("scripts"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
