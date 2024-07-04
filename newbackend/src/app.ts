import express, { Application } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
// import { dbInit } from './models'

// import { dbConnect } from './db/connection'

// import db from './db/connection'
// import FAQ from "./routes/faq.route"
const app: Application = express()
config()

// db.connect;
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// app.use(FAQ)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})