import express, { Application, json } from 'express';
import { config }  from 'dotenv';
import { connect, connection } from 'mongoose';
import cors from 'cors';
import { logger } from './middleware/logger';
import { router as molecules } from './routes/api/molecules';
import { router as elements } from './routes/api/elements';
import { router as wikipedia } from './routes/api/wikipedia';

// setup express application
const app: Application = express()

// configure environment
config()

// setup mongoose connection
connect(process.env.PERIODIC_TABLE_DB as string)
const db = connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// configure middleware
app.use(cors())
app.use(json())
app.use(logger)

// configure routes
app.use('/ptable/molecules', molecules)
app.use('/ptable/elements', elements)
app.use('/ptable/wikipedia', wikipedia)

// start server
const port: string|number = process.env.PORT || 1359
app.listen(port, () => console.log(`started server on port ${port}`))