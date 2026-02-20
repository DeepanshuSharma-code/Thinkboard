import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'
import path from 'path'

import { connectDb } from "./config/DB.js";
import router from "./routes/note.route.js";
import { logger } from "./middleware/logger.js";
import { ratelimiter } from "./middleware/ratelimiter.js";



const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

configDotenv();
app.use(express.json());
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve()

app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(ratelimiter);

app.use("/notes", router);

connectDb().then(() => {

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });

});
