const express = require('express')
const colors = require('colors');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

require('./hbs/helpers');

app.use(express.static(__dirname + '/public')); // uso de middleware. Para que muestre de manera estatica lo que hay disponible en public

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

/* Servicio web: / */
app.get('/', (req, res) => {
    // res.send('Hola mundo')

    /*     const salida = {
            nombre: 'Eduardo',
            edad: 48,
            url: req.url
        }
     */
    // res.send(salida);
    res.render('home', {
        nombre: 'eDUardiTO'
            // anio: new Date().getFullYear()
    });
})

/* Servicio web: /about */
app.get('/about', (req, res) => {
    // res.render('about', { anio: new Date().getFullYear() });
    res.render('about');
})

/* app.get('/data', (req, res) => {
    res.send('Hola data');
})
 */
app.listen(port, () => { // el console.log() se va disparar cuando el app.listen se levante
    console.log(`Escuchando peticiones en el puerto ${port} ...`.red);
})