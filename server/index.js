import express from 'express';
import cors from 'cors';
import Connection from './db/db.js';
import Routes from './routes/routes.js';
const app = express();

app.use(cors());
app.use(express.json({ extended: true}));
app.use(express.urlencoded({extended:true}));

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT,()=>console.log(`your server is running on port ${PORT}`));
