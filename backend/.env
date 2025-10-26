
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import AuthRouter from './Routers/AuthRouter.js';
import Authdetails from './Routers/Authdetails.js';
import './models/db.js'; 


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working perfectly!");
});

app.use('/auth', AuthRouter);
app.use('/name',Authdetails);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
