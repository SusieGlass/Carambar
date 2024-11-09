
const express = require('express');
const app = express();
const blagueRoutes = require('./routes/blagueRoutes');
const path = require('path');


//const { Joke } = require('./models/blagueModel'); // Assure-toi que le modèle est bien importé


app.use(express.json());  // Pour pouvoir lire les données JSON dans le corps des requêtes
app.use(express.static(path.join(__dirname, '../public')));

// Associe les routes à "/api"
app.use('/api', blagueRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});



/*Joke.findAll().then(blagues => {
  console.log(blagues); // Affiche toutes les blagues dans la console
}).catch(error => {
  console.error('Erreur lors de la récupération des blagues:', error);
});*/
