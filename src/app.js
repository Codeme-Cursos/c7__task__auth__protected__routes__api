import express, { json } from 'express';
import path from 'path';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import '@babel/polyfill';

//Routes imports
import authRoutes from './routes/auth.route';
import taskRoutes from './routes/task.route';

const app = express();


const { PORT } = process.env;

//configurations for render templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());
app.use(compression());
app.use(helmet());

const prefix = '/api';

app.get('/', (req, res) => res.render('index', { author: 'Codeme' }))
app.use(prefix, authRoutes)
app.use(prefix, taskRoutes)

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})