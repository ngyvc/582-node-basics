import { readFile, writeFile } from "fs/promises";

let template = await readFile("./template.html", "utf-8");

const replacement = {
  title: "My First Page",
  content: "Hello World!",
};

for (let key in replacement) {
  template = template.replace(`{${key}}`, replacement[key]);
}

console.log(template);

await writeFile("./static/index.html", template);
