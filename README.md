# ELEC 3 – Node.js

**Name:** Charles Caampued
**Section:** IV-BSIT-A
**Course:** ELEC 3 – Node.js
**Instructor:** Carl Gustaf Patrik B. Ferrer

Self-paced learning assignment covering the lessons for November 9–20, 2026.

## Activities

| Set | Activity | Description | Folder |
|---|---|---|---|
| 1 | N1 · Project Setup | npm project with a dependency, a dev dependency and a start script that prints my name. | [set1/n1-setup](set1/n1-setup/) |
| 1 | N2 · Modular Calculator | Command-line calculator split into `operations.js` and `formatter.js` modules. | [set1/n2-calculator](set1/n2-calculator/) |
| 1 | N3 · File Manager | Creates, reads, updates, deletes and lists text files in `files/` using `fs` and `path`. | [set1/n3-file-manager](set1/n3-file-manager/) |
| 2 | N4 · Basic HTTP Server | HTTP server with Home, About and Contact routes and a 404 page. | [set2/n4-server](set2/n4-server/) |
| 2 | N5 · Student API | REST-style API for student records using GET, POST, PUT and DELETE. | [set2/n5-api](set2/n5-api/) |
| 2 | N6 · Middleware and API Testing | API with logger middleware, tested with an API testing tool. | [set2/n6-middleware](set2/n6-middleware/) |

## Requirements

- Node.js and npm
- `node_modules/` is not included. Run `npm install` inside `set1/n1-setup` before `npm start`.

---

# Set 1

## N1 · Project Setup

```bash
cd set1/n1-setup
node -v
npm -v
npm install
npm start
```

Written answers: [N1_answers.pdf](set1/n1-setup/N1_answers.pdf)

![N1 versions](set1/n1-setup/screenshots/versions.png)
![N1 package.json](set1/n1-setup/screenshots/package.png)
![N1 npm start](set1/n1-setup/screenshots/start.png)

## N2 · Modular Calculator

```bash
cd set1/n2-calculator
node index.js add 12 8
node index.js subtract 12 8
node index.js multiply 12 8
node index.js divide 12 8
node index.js average 4 6 8
node index.js divide 12 0
node index.js power 2 3
```

![N2 add](set1/n2-calculator/screenshots/add.png)
![N2 subtract](set1/n2-calculator/screenshots/subtract.png)
![N2 multiply](set1/n2-calculator/screenshots/multiply.png)
![N2 divide](set1/n2-calculator/screenshots/divide.png)
![N2 average](set1/n2-calculator/screenshots/average.png)
![N2 divide by zero](set1/n2-calculator/screenshots/zero.png)
![N2 unknown operation](set1/n2-calculator/screenshots/unknown.png)

## N3 · File Manager

```bash
cd set1/n3-file-manager
node index.js create demo.txt "First line"
node index.js read demo.txt
node index.js update demo.txt "Second line"
node index.js list
node index.js delete demo.txt
```

![N3 create](set1/n3-file-manager/screenshots/create.png)
![N3 read](set1/n3-file-manager/screenshots/read.png)
![N3 update](set1/n3-file-manager/screenshots/update.png)
![N3 list](set1/n3-file-manager/screenshots/list.png)
![N3 delete](set1/n3-file-manager/screenshots/delete.png)

---

# Set 2

## N4 · Basic HTTP Server

```bash
cd set2/n4-server
node index.js
```

![N4 home](set2/n4-server/screenshots/home.png)
![N4 about](set2/n4-server/screenshots/about.png)
![N4 contact](set2/n4-server/screenshots/contact.png)
![N4 unknown route](set2/n4-server/screenshots/unknown.png)

## N5 · Student API

```bash
cd set2/n5-api
node index.js
```

![N5 list](set2/n5-api/screenshots/list.png)

## N6 · Middleware and API Testing

```bash
cd set2/n6-middleware
node index.js
```

Written answers: [N6_answers.pdf](set2/n6-middleware/N6_answers.pdf)

![N6 list](set2/n6-middleware/screenshots/list.png)
![N6 create](set2/n6-middleware/screenshots/create.png)
![N6 retrieve](set2/n6-middleware/screenshots/retrieve.png)
![N6 update](set2/n6-middleware/screenshots/update.png)
![N6 delete](set2/n6-middleware/screenshots/delete.png)
![N6 logger](set2/n6-middleware/screenshots/logger.png)
