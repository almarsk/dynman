const fs = require("fs").promises;
const path = require("path");

async function buildManual(directoryPath) {
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
          result.anotace = data.trimEnd();
          result.title = item_name;
        }
        if (item_type === "link") {
          const filePath = path.join(directoryPath, item);
          const data = await fs.readFile(filePath, "utf8");
          result.links.push({ title: item_name, link: data.trimEnd() });
        }
      }
    }

    const sections = await fs.readdir(path.join(directoryPath, "sekšny"), {
      encoding: "utf8",
    });
    sections.forEach((section) => {
      const split = section.split(".")[0].split("_");
      if (split.length > 1) {
        const item_type = split[split.length - 1];
        const item_name = split.splice(0, split.length - 1).join("_");
        if (item_type == "section") {
          result.sections.push({ name: item_name, content: {} });
        }
      }
    });
    return result;
  } catch (err) {
    console.error("Error reading directory:", err);
    throw err;
  }
}

// Example usage:
const directoryPath = "./content_manual"; // Update with your directory path
buildManual(directoryPath)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

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
