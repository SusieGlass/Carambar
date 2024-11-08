// api/routes/blagueRoutes.js
const express = require('express');
const router = express.Router();

// Route pour ajouter une nouvelle blague
router.post('/blagues', (req, res) => {
  console.log('POST /api/blagues reçu');
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Le contenu de la blague est requis' });
  }
  // Ici tu pourrais ajouter la blague dans une base de données ou un tableau (pour le moment, on peut juste renvoyer la blague)
  res.json({ message: 'Blague ajoutée', content });
});

// Route pour consulter toutes les blagues
router.get('/blagues', (req, res) => {
  console.log('GET /api/blagues reçu');
  // Par exemple, renvoyer un tableau de blagues en réponse
  const blagues = [
    { id: 1, content: "Pourquoi les poissons détestent l'ordinateur ? Parce qu'ils ont peur du net !" },
    { id: 2, content: "Pourquoi les poules ne portent-elles pas de pantalon ? Parce qu'elles ont des oeufs !" }
  ];
  console.log(blagues);
  res.json(blagues);  // Retourne toutes les blagues
});


// Route pour consulter une blague spécifique
router.get('/blagues/:id', (req, res) => {
  const id = req.params.id;
  // Logique pour récupérer une blague par ID
  res.send(`Blague avec l'ID ${id}`);
});

// Route pour consulter une blague aléatoire
router.get('/blagues/random', (req, res) => {
  // Logique pour récupérer une blague aléatoire
  res.send('Blague aléatoire');
});

module.exports = router;
