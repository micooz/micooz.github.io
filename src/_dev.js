import express from 'express';
import path from 'path';

const app = express();

// act as github.io server do.
app.use(express.static(path.join(__dirname, '../')));

const server = app.listen(3000, () => {
  const {address, port} = server.address();
  console.log(`local dev server is listening at http://${address}:${port}`);
});