const http = require("http");

const server = http.createServer();
server.on("request", (request, response) => {
  // the same kind of magic happens here!
  console.log(request.url);
  if (request.url.substring(0, 7) === "/secret") {
    response.end("Secrets! Shh!");
  } else {
    console.log("a request was made with", request.method);
    response.end("Hello, world!");
  }
});

server.listen(3000, () => {});
