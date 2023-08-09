// https://nodejs.org/api/fs.html#file-system

import { readFile } from "fs/promises";

let template = await readFile("./template.html", "utf-8");

console.log(template);
