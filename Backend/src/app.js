// import express from "express";
// import { configDotenv } from "dotenv";
// import cors from 'cors'
// import path from 'path'

// import { connectDb } from "./config/DB.js";
// import router from "./routes/note.route.js";
// import { logger } from "./middleware/logger.js";
// import { ratelimiter } from "./middleware/ratelimiter.js";



// const app = express();
// configDotenv();

// // if(process.env.NODE_ENV !== "production"){
//   app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }))
// // }

// app.use(express.json());
// const PORT = process.env.PORT || 8080;
// // const __dirname = path.resolve()


// app.use(express.urlencoded({ extended: true }));

// app.use(logger);
// app.use(ratelimiter);

// app.use("/notes", router);

// // if(process.env.NODE_ENV === "production"){
// // app.use(express.static(path.join(__dirname, "../Frontend/dist")))

// // app.get(/.*/, (req,res) => {
// //   res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"))
// // })
// // }

// connectDb().then(() => {

//   app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
//   });

// });

import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors';

configDotenv(); // ← Move this to the TOP before anything else

import { connectDb } from "./config/DB.js";
import router from "./routes/note.route.js";
import { logger } from "./middleware/logger.js";
import { ratelimiter } from "./middleware/ratelimiter.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(ratelimiter);
app.use("/notes", router);

const PORT = process.env.PORT || 8080;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});