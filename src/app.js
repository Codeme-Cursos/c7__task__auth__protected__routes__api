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
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(helmet());
app.use(compression());
app.use(cors());

const prefix = '/api';

app.use(prefix, authRoutes)
app.use(prefix, taskRoutes)
app.get('/', (req, res) => res.render('index', { author: 'Codeme' }))

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})