const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("I am here");
})

app.get('/vegan', (req, res) => {
    res.send("Vegan recipes")
})

app.listen(3000, function(){
    console.log(`It's working!`)
})