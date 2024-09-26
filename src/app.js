import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config()

const app = express()

app.use(cors())


const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended : true}))
app.use('/', routes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})