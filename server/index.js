const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json()); //req.body
app.use(cors());

app.use('/auth', require('./routes/jwtAuth'));

app.use('/dashboard', require('./routes/dashboard'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('server is runing on port 5000');
})
