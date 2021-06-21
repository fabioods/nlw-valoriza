import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.send('olá mundo')
})

app.post('/test-post', (req, res) => {
  return res.send('olá mundo')
})

app.listen(5000, () => {console.log('🚀 let\'s start')})