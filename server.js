
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const movies = [
  {
    id: 1,
    title: "Sample Movie",
    genre: "Adventure",
    year: 2025,
    rating: "8.0",
    image: "photo-1446776811953-b23d57bd21aa"
  },
  {
    id: 2,
    title: "Sample Comedy",
    genre: "Comedy",
    year: 2024,
    rating: "7.5",
    image: "photo-1517248135467-4c7edcad34c4"
  },
  {
    id: 3,
    title: "Sample Adventure",
    genre: "Action",
    year: 2025,
    rating: "7.8",
    image: "photo-1464822759023-fed622ff2c3b"
  },
  {
    id: 4,
    title: "Sample Drama",
    genre: "Drama",
    year: 2025,
    rating: "7.9",
    image: "photo-1519608487953-e999c86e7455"
  },
  {
    id: 5,
    title: "Sample Sci-Fi",
    genre: "Sci-Fi",
    year: 2024,
    rating: "8.2",
    image: "photo-1446776811953-b23d57bd21aa"
  },
  {
    id: 6,
    title: "Sample Documentary",
    genre: "Documentary",
    year: 2023,
    rating: "8.1",
    image: "photo-1470770841072-f978cf4d019e"
  }
];

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/movies", (req, res) => {
  res.json({ movies });
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`StreamZone running at http://localhost:${PORT}`);
  });
}
