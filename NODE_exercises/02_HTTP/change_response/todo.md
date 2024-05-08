Our HTTP server sends an HTML response body. Replace the text in the HTML with your own message. Run the server and use your web browser to test your changes.

    Imports the Node.js core http module (or with node:http).
    Creates an HTTP server with the http.createServer method.
    Set the response status code to 200
    Sets the response header: Content-Type: text/html
    Sends an HTML response body containing any message.
    Make the server listen to the port 3000
