const http = require("http");

const server = http.createServer();
server.on("request", (request, response) => {
  // the same kind of magic happens here!
  //   console.log(request.headers);
  //   if (request.url.substring(0, 7) === "/secret") {
  //     response.end("Secrets! Shh!");
  //   } else {
  //     console.log("a request was made with", request.method);
  //     response.end("Hello, world!");
  //   }
  let body = [];
  request
    .on("error", (err) => {
      // This prints the error message and stack trace to `stderr`.
      console.error(err.stack);
    })
    .on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
      console.log(body);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
      response.writeHead(200, {
        "Content-Type": "application/json",
        "X-Powered-By": "bacon",
      });

      // write to response using write()
      //   response.write("hello");

      // write to response in json format or display "Hello, world!"
      //   response.end(body || "Hello, world!");

      // parse json and write to response in normal format
      let jsonObj = JSON.parse(body);
      for (let key in jsonObj) {
        response.write(key + ": " + jsonObj[key] + "\n");
      }
      response.end();
    });
});

server.listen(3000, () => {});
