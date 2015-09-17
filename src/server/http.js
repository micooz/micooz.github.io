import express from 'express';
import path from 'path';
import fs from 'fs';
import r_index from './route/index';

const app = express();

// setup pure html view engine
app.engine('html', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(err);
    }
    callback(null, content.toString());
  });
});
app.set('views', path.join(__dirname, '../../src/server/view/'));
app.set('view engine', 'html');

// act as github.io server do.
app.use(express.static(path.join(__dirname, '../../')));

// for local writer
app.use('/editor', r_index);

const server = app.listen(3000, () => {
  const {address, port} = server.address();
  console.log(`local dev server is listening at http://${address}:${port}`);
});