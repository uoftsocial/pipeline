import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';

const app = express();
const port = 3000;

app.server = http.createServer(app);

app.use(bodyParser.json({
}));

app.server.listen(process.env.PORT || port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
