import express from 'express';
import config from './config/config.json';
import helloWorldRouter from './routers/webapp/helloWorld';
import api from './routers/api';
import requestLogger from './middleware/requestLogger';

const PORT = config.port;

const app = express();

// Middleware
app.use(requestLogger);

// Routers
app.use('', helloWorldRouter);
app.use('/api', api);

app.listen(() => {
  console.log(`Interview app listening at http://localhost:${PORT}`);
});
