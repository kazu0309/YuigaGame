import { createServer } from "http";
import { readFile } from "fs";

let server = createServer((request, response) => {
    readFile("./index.html", "utf-8", (error, data) => {
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write("Internal Server Error");
            response.end();
            console.error(error);
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        }
    })
})

server.listen(3000);
console.log("Server started!");