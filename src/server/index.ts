import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve('dist')));
app.use(express.static(path.resolve('public')));
app.use('/api', require('./routes/sample-api'));

app.listen(8080, () => console.log('Listening on 8080! http://localhost:8080'));
