const express = require("express");
const cors = require("cors");
const fs = require("fs").promises; // Use fs.promises for async/await compatibility
const path = require("path"); // Import the path module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", async (req, res) => {
  // Make the route handler asynchronous
  const structure = await buildManual(); // Await the result of buildManual()

  res.json(structure);
});

async function buildManual(directoryPath = "./content_manual") {
  const result = {};
  result.links = [];
  result.sections = [];

  try {
    const dir_content = await fs.readdir(directoryPath);

    for (const item of dir_content) {
      const split = item.split(".")[0].split("_");
      if (split.length > 1) {
        const item_type = split[split.length - 1];
        const item_name = split.splice(0, split.length - 1).join("_");

        if (item_type === "anotace") {
          const filePath = path.join(directoryPath, item);
          const data = await fs.readFile(filePath, "utf8");
          result.annotation = data.trimEnd();
          result.title = item_name;
        }
      }
    }

    const linksDir = path.join(directoryPath, "links");
    const links = await fs.readdir(linksDir);
    for (const link of links) {
      const split = link.split(".")[0].split("_");
      if (split.length > 1 && split[split.length - 1] === "link") {
        const item_name = split.slice(1, -1).join("_");
        const filePath = path.join(linksDir, link);
        const data = await fs.readFile(filePath, "utf8");
        result.links.push({ title: item_name, link: data.trimEnd() });
      }
    }

    const sectionsDir = path.join(directoryPath, "sections");
    const sections = await fs.readdir(sectionsDir, { encoding: "utf8" });
    for (const section of sections) {
      const split_section = section.split(".")[0].split("_");
      if (
        split_section.length > 1 &&
        split_section[split_section.length - 1] === "section"
      ) {
        const section_name = split_section.slice(1, -1).join("_");
        result.sections.push({ name: section_name, content: [] });

        const sectionPath = path.join(directoryPath + "/sections", section);
        const sectionContent = await fs.readdir(sectionPath);

        const promises = sectionContent.map(async (sectionItem) => {
          const split = sectionItem.split(".")[0].split("_");
          if (split.length > 2) {
            const item_name = split.slice(1, -1).join("_");
            const item_type = split[split.length - 1];

            if (["text", "list", "tip"].includes(item_type)) {
              const text = (
                await fs.readFile(
                  path.join(
                    path.join(directoryPath + "/sections", section),
                    sectionItem,
                  ),
                  "utf8",
                )
              ).trimEnd();
              return { name: item_name, type: item_type, text };
            }
            if (["dropdown"].includes(item_type)) {
              return { name: item_name, type: item_type, content: [] };
            }
            if (["link"].includes(item_type)) {
              return { name: item_name, type: "link" };
            }
          }
        });

        Promise.all(promises).then((items) => {
          for (const item of items) {
            result.sections
              .filter((s) => s.name == section_name)
              .forEach((s) => s.content.push(item));
          }
        });
      }
    }
    result.sections.forEach((s) => console.log(s));
    return result;
  } catch (err) {
    console.error("Error reading directory:", err);
    throw err;
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
