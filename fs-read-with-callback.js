const fs = require("fs");

fs.readFile("template.html", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);

  const replacement = {
    title: "callback",
    content: "Hello World!",
  };

  for (let key in replacement) {
    data = data.replace(`{${key}}`, replacement[key]);
  }

  console.log(data);

  fs.writeFile("./static/index.html", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
