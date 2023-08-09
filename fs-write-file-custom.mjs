import { readFile, writeFile } from "fs/promises";

let template = await readFile("./template.html", "utf-8");

const replacement = {
  title: process.argv[3] || "My First Page",
  content: process.argv[4] || "Hello World!",
};

for (let key in replacement) {
  template = template.replace(`{${key}}`, replacement[key]);
}

console.log(template);

await writeFile(`./static/${process.argv[2] || "default"}.html`, template);

// Try this in the terminal: node fs-write-file-custom.mjs about "About Us" "This is the about page."
