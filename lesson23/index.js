// const { arr, newArr } = require('./script.js');

// console.log(arr, newArr);

// console.log('hello world');

// let a = 3;
// let b = 4;
// console.log (a + b);

// const http = require('http');
// const PORT = process.env.PORT;

// const server = http.createServer(async (req, res) => {
//   console.log('Im incide server');
// });

// server.listen(PORT, () => {
//   console.log('Server is running ' + PORT);
// });

const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } =  require('uuid');
const util = require('util');

const app = express();
const PORT = process.env.PORT;

const readFileAsPromise = util.promisify(fs.readFile);
const writeFileAsPromise = util.promisify(fs.writeFile);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/docs', (req, res) => {
  const docs = new Array(5).fill(null).map((item, i) => ({
    id: uuidv4(),
    name: 'Doc ' + i,
  }));
  res.send(docs);
});

app.get('/random', (req, res) => {
  res.sendFile('./data/random.json', {root: __dirname });
});

app.get('/read-data', async (req, res) => {
  /* Синхронное получение файла ./data/random.txt */

  // const data = fs.readFileSync('./data/random.txt', 'utf-8');

  /* Aссинхронное получение файла ./data/random.txt через callback */

  // fs.readFile('./data/random.txt', (err, data) => {
  //   const content = data.toString();
  //   console.log(content);
  //   res.send(content);
  // });

  /* Получение данных через промисс */
  // const promise = readFileAsPromise('./data/random.txt', 'utf-8')
  //   .then(data => res.send(data));

  /* Получение данных через промисс c async/await */
  const data = await readFileAsPromise('./data/random.txt', 'utf-8');
  res.send(data);
});

app.get('/write-data', async (req, res) => {
  /* Синхронная запись файла ./data/random.txt */

  // const obj = { a: 1 };
  // fs.writeFileSync('./data/script.js', JSON.stringify(obj));
  // res.send('Writed');

  /* Запись данных через промисс c async/await */
  if (req.query.text) {
    let initialData = await readFileAsPromise('./data/text.txt', 'utf-8');
    initialData += ` ${req.query.text}`;
    await writeFileAsPromise('./data/text.txt', initialData);
    res.send(initialData);

  } else if(req.query.rename) {
    fs.rename('./data/text.txt', './data/newText.txt', () => {
      res.send('renamed');
    });
  } else {
    res.send('Error');
  }
});

app.get('/html', (req, res) => {
  res.sendFile('./index.html', {root: __dirname });
}) 

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})