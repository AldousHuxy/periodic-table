# Periodic Table
### MERN Stack Application Guide
<p>A fullstack application using MongoDb, Express, React, and Node, with both the frontend and backend written in TypeScript. Additional technologies includes Mongoose and Bootstrap.</p>

<br>

---

## Step One: Initial Setup
- Create a project folder 'periodic-table' in your repos directory.
- Within you project folder we will need two folders 'client/' and 'server/', let's start inside the client directory.

### Client
1) With [Node.js](https://nodejs.org/en) installed, run `npm create vite@latest` to setup you React application with TypeScript + SWC. Once complete, remove the following files: 'public/', 'src/style.css', and 'src/App.css'

2) Next we need to install our dependencies with npm:
```bash
npm i react-bootstrap bootstrap react-router-dom react-router-bootstrap
npm i -D @types/react-router-bootstrap
```

3) Inside our 'vite-env.d.ts' file we'll add this code below our plugins to configure our server:
```javascript
server: {
    host: true,
    port : 3000,
    proxy: {
        '/ptable': {
            target: 'http://localhost:1359',
            changeOrigin: true,
            secure: false
        }
    }
}
```

4) Inside our 'main.tsx' file we'll replace the index.css import with bootstrap (bootstrap/dist/css/bootstrap.min.css), wrap our App component with `<BrowserRouter></BrowserRouter>`, and change our app export from a default object by wrapping it with curly braces: `{ App }`.

5) Inside our App.tsx we'll remove all of the existing code and add this boiler plate code to our server.ts file:
```javascript
import { useEffect, useState } from "react"

export const App = () => {
  const [greeting, setGreeting] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:1359/ptable')
      .then(res => res.json())
      .then(greet => setGreeting(greet.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <h1>{!greeting ? 'Loading' : greeting}</h1>
  )
}
```
### Server
1) Within our server folder we first need to setup our 'package.json' file as well as our dependencies:
```bash
npm init -y
npm i express mongoose moment cors
npm i -D typescript ts-node nodemon dotenv @types/node @types/express
```

2) Inside of our 'package.json' we need to add the following scripts:
```json
"start": "node dist/server.js",
"dev": "nodemon src/server.ts",
"build": "tsc -p ."
```

3) Inside our tsconfig.json we need configure the following: 
```json
"target": "ES6"
"rootDir": "./src"
"moduleResolution": "node"
"outDir": "./dist"
```

4) In our src/ folder we need to create a .dotenv and .gitignore initially including the following in the latter file:
```
node_modules
.env
```

5) Let's add this boiler plate code to our server.ts file:
```javascript
import { log } from 'console';
import express, { Application, Request, Response, NextFunction, json } from 'express';
import { logger } from './middleware/logger';
import cors from 'cors';

// setup express application
const app: Application = express()

// setup middleware
app.use(json())
app.use(logger)
app.use(cors())

// [GET] home page
app.get('/ptable', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Welcome to the Periodic Table Application!' })
})

// start server
const port: string|number = process.env.PORT || 1359
app.listen(port, () => log(`started server on port ${port}`))
```

6) Finally let's setup our first custom middleware for logging the request time with moment.
```javascript
import { log } from "console";
import { NextFunction, Request, Response } from "express";
import moment from 'moment';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next()
}
```

## Step Two: Running Application
To run our entire application let's head back to root directory of our application and create a new package.json file so that we can install program called 'concurrently':
```bash
npm init -y
npm i concurrently
```
Now let's setup some scripts:
```json
"client": "cd client && npm run dev",
"server": "cd server && npm run dev",
"dev": "concurrently \"npm run client\" \"npm run server\""
```
To run our application simply run `npm run dev`.

<br>

**Welcome to the Periodic Table Application!**