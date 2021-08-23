import path from 'path';
import express from "express";
import cors from "cors";
import route from './routes/routing';

const app = express();
const port = 3000;

// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(route);
app.use(cors());



app.listen(port, () => {
    console.log("you are now listening to port:" + port);
})