const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.on("request", (request, response) => {
  let body = [];
  request
    .on("error", (err) => {
      console.error(err.stack);
    })
    .on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
      console.log(body);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      let jsonObj = JSON.parse(body);

      fs.readFile("template.html", "utf-8", (err, data) => {
        if (err) throw err;

        console.log(data);

        const replacement = jsonObj;

        for (let key in replacement) {
          data = data.replace(`{${key}}`, replacement[key]);
        }

        console.log(data);
        response.end(data);
      });
    });
});

server.listen(3000, () => {});
