const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
  const structure = buildManual();
  res.json(structure);
});

function recurseStructure(path, iterable) {
  for (let index = 0; index < iterable.length; index++) {
    const item = iterable[index];
    if (item.type === "dropdown") {
      // recurse
      recurseStructure(path + item.name + "/", item.content);
    } else if (item.type !== "img" && item.type !== "link") {
      const text = fs.readFileSync(path + item.name, "utf8");
      item.text = text;
    } else if (item.type === "img") {
      console.log("todo img");
    }
  }
}

function buildManual() {
  const structureFilePath = "content/structure.json";
  const structure = JSON.parse(fs.readFileSync(structureFilePath, "utf8"));
  const path = "content/sections/";

  const annotation = fs.readFileSync(path + structure.annotation, "utf8");
  structure.annotation = annotation;

  for (let i = 0; i < structure.sections.length; i++) {
    const section = structure.sections[i];
    recurseStructure(path + section.name + "/", section.content);
  }

  return structure;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
