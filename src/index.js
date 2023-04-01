import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';

const app = express();

const __DIRNAME = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__DIRNAME, 'views'));
app.set('view engine', 'ejs');
app.use(indexRoutes);

app.use(express.static(join(__DIRNAME, 'public')));

app.listen(process.env.PORT || 3000);
console.log('Server is listening on port', process.env.PORT || 3000);