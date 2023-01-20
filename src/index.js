var http = require("http");

const httpServer = http.createServer(handleServer);
const PORT = 8081;

function handleServer(req, res) {
  if (req.url === "/") {
    res.write("Your on Home Page of Dominos!!");
    res.end();
  } else if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
}

httpServer.listen(PORT, () => {
  console.log(`server is running at the port ${PORT}`);
});

module.exports = httpServer;
