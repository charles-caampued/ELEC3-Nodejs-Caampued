// Charles Caampued | IV-BSIT-A | N3 | 11-21-2026

const fs = require("node:fs");
const path = require("node:path");
const folder = path.join(__dirname, "files");

function filePath(name) {
  if (!name || !/^[a-z0-9_-][a-z0-9_. -]*\.txt$/i.test(name) ||
      /^(con|prn|aux|nul|com[1-9]|lpt[1-9])\./i.test(name)) {
    throw new Error("Use a plain .txt filename, such as notes.txt.");
  }
  const target = path.join(folder, name);
  const info = fs.lstatSync(target, { throwIfNoEntry: false });
  if (info && !info.isFile()) throw new Error("Choose a regular text file.");
  return target;
}

function main() {
  const [command, name, ...words] = process.argv.slice(2);
  fs.mkdirSync(folder, { recursive: true });
  if (fs.lstatSync(folder).isSymbolicLink()) throw new Error("Choose a local files folder.");
  if (command === "list") {
    for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".txt")) continue;
      const target = filePath(entry.name);
      console.log("Full path:", target);
      console.log("Filename:", path.basename(target), "| Extension:", path.extname(target));
      console.log("Contents:", fs.readFileSync(target, "utf8"));
    }
    return;
  }
  if (!["create", "read", "update", "delete"].includes(command)) {
    throw new Error("Use create, read, update, delete or list.");
  }
  const target = filePath(name);
  if (command === "create") {
    fs.writeFileSync(target, words.join(" "), { flag: "wx" });
    console.log("Created", name);
  } else {
    if (!fs.existsSync(target)) throw new Error("File not found: " + name);
    if (command === "read") console.log(fs.readFileSync(target, "utf8"));
    if (command === "update") {
      fs.appendFileSync(target, "\n" + words.join(" "));
      console.log("Updated", name);
    }
    if (command === "delete") {
      fs.unlinkSync(target);
      console.log("Deleted", name);
    }
  }
}

try {
  main();
} catch (error) {
  console.error(error.code === "EEXIST" ? "File already exists." : error.message);
  process.exitCode = 1;
}
