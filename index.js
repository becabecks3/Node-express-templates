const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static('images'));


app.get('/', (req, res) => {
    res.render('mission', {});
});

// Módulos de Rutas
const dogRoutes = require('./routes/dogRoutes');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');


//Rutas
app.use('/pug', dogRoutes); 


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));