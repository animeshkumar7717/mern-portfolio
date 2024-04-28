const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/portfolio.route');
const path = require('path')

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

// static file access
app.use(express.static(path.join(__dirname, './client/build')))

const PORT = process.env.PORT || 8000;

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.get('/', (req,res)=>{
    res.send('app is working successfully...')
});

app.use('/api/v1/portfolio', router)
app.listen(PORT, ()=>{
    console.log(`App is listening on PORT ${PORT}`);
})
