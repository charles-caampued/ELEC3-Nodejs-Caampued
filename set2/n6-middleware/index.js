// Charles Caampued | IV-BSIT-A | N6 | 11-21-2026

const http = require("node:http");

const students = [
  { id: 1, name: "Inday Kalamansi", section: "BSIT-A" },
  { id: 2, name: "Dodong Lechon", section: "BSIT-B" },
  { id: 3, name: "Kikay Ensaymada", section: "BSIT-A" }
];
let nextId = 4;

function send(response, status, data) {
  response.statusCode = status;
  response.end(JSON.stringify(data));
}

async function readStudent(request) {
  request.setEncoding("utf8");
  let text = "";
  for await (const chunk of request) {
    text += chunk;
  }
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Invalid JSON.");
  }
  if (!data || typeof data.name !== "string" || !data.name.trim() ||
      typeof data.section !== "string" || !data.section.trim()) {
    throw new Error("Provide a nonempty name and section.");
  }
  return { name: data.name.trim(), section: data.section.trim() };
}

async function handleRequest(request, response) {
  const route = request.url.split("?")[0];
  const match = /^\/api\/students(?:\/(\d+))?$/.exec(route);
  if (!match) return send(response, 404, { message: "Route not found." });

  const method = request.method;
  const isCollection = match[1] === undefined;
  const allowed = isCollection ? ["GET", "POST"] : ["GET", "PUT", "DELETE"];
  if (!allowed.includes(method)) {
    response.setHeader("Allow", allowed.join(", "));
    return send(response, 405, { message: "Method not allowed." });
  }

  try {
    if (isCollection) {
      if (method === "GET") return send(response, 200, students);
      const fields = await readStudent(request);
      const student = { id: nextId++, ...fields };
      students.push(student);
      return send(response, 201, student);
    }

    const id = Number(match[1]);
    if (!students.some(student => student.id === id)) {
      return send(response, 404, { message: "Student not found." });
    }
    const fields = method === "PUT" ? await readStudent(request) : null;
    const index = students.findIndex(student => student.id === id);
    if (index === -1) return send(response, 404, { message: "Student not found." });
    if (method === "GET") return send(response, 200, students[index]);
    if (method === "PUT") {
      students[index] = { id, ...fields };
      return send(response, 200, students[index]);
    }
    students.splice(index, 1);
    return send(response, 200, { message: "Student deleted.", id });
  } catch (error) {
    return send(response, 400, { message: error.message });
  }
}

function logger(request, response, next) {
  console.log(new Date().toLocaleString(), request.method, request.url);
  next();
}

function jsonHeader(request, response, next) {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
}

http.createServer((request, response) => {
  logger(request, response, () => {
    jsonHeader(request, response, () => handleRequest(request, response));
  });
}).listen(8002, "127.0.0.1", () => console.log("Charles Caampued | http://localhost:8002"));
