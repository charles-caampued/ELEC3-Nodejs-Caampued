// Charles Caampued | IV-BSIT-A | N4 | 11-21-2026

const http = require("node:http");

const pages = new Map([
  ["/", ["Home", "Charles Caampued | IV-BSIT-A"]],
  ["/about", ["About", "I am Charles, an IT student learning how Node.js serves web pages."]],
  ["/contact", ["Contact", "This class project has no public contact details."]]
]);

http.createServer((request, response) => {
  const route = request.url.split("?")[0];
  const page = pages.get(route);
  const [title, message] = page || ["404", "Page not found"];
  response.writeHead(page ? 200 : 404, { "Content-Type": "text/html; charset=utf-8" });
  response.end('<!doctype html><html lang="en"><meta charset="utf-8"><title>' + title +
    '</title><h1>' + title + '</h1><p>' + message + '</p><footer>Charles Caampued</footer></html>');
}).listen(8000, "127.0.0.1", () => console.log("Charles Caampued | http://localhost:8000"));
