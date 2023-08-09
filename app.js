const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  //   console.log(req);
  let jsonObj = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };

  console.log("a request was made with", req.method);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(jsonObj));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
