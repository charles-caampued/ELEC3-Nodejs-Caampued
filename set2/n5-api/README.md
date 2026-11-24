# N5 · Students API

Charles Caampued · IV-BSIT-A · 11-21-2026

From this folder run `node index.js`. In Postman or Thunder Client choose JSON for request bodies. Replace {id} with the ID returned by POST. Both fields are required when updating. Records reset after restarting the server.

| Method | URL | JSON body | Status | Check |
| --- | --- | --- | --- | --- |
| GET | `http://localhost:8001/api/students` | `—` | 200 | List the three initial students. |
| POST | `http://localhost:8001/api/students` | `{"name":"Marites Chismosa","section":"BSIT-A"}` | 201 | Copy the id from the new student. |
| GET | `http://localhost:8001/api/students/{id}` | `—` | 200 | Retrieve Marites using the copied ID. |
| PUT | `http://localhost:8001/api/students/{id}` | `{"name":"Marites Chismosa","section":"BSIT-B"}` | 200 | Confirm the section changed. |
| DELETE | `http://localhost:8001/api/students/{id}` | `—` | 200 | Read the deletion confirmation. |

Invalid JSON or missing fields return 400. Missing students return 404. Unsupported methods on an existing route return 405.
