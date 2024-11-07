const express = require('express');
const app = express();

// Servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
