//Imports the Node.js core http module (or with node:http).
import { createServer } from "node:http";
//Creates an HTTP server with the http.createServer method.
const server = createServer((request, response) => {
  console.log("request received");
  //Set the response status code to 200
  response.statusCode = 200;
  //Sets the response header: Content-Type: text/html
  response.setHeader("Content-Type", "text/html");
  //Sends an HTML response body containing any message.
  response.end(
    "<html><body><h1>Il server stà funzionando correttamente!</h1></body></html>"
  );
});
//Make the server listen to the port 3000
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
