import express, { Application } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
// import { dbInit } from './models'

import db from './db/connection'
import router from './routes/register.route'
import { AppDataSource } from './config/data-source'
const app: Application = express()
config()

// db.connect;
AppDataSource.initialize().then(async () => {
  console.log("model initialized succesfullyy")
})
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(router)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})