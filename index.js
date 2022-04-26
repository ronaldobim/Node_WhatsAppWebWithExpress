const qrcode = require('qrcode-terminal');
 
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

//criando servidor node
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World whats app, use /send pra testar!')
})

app.get('/send', (req, res) => {
  client.sendMessage('554688888888', 'teste msg whats node.js');  
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})