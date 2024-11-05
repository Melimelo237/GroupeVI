const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/collecte-donnees', (req, res) => {
  const donnees = req.body;
  // Traiter les données reçues ici (stockage, analyse, etc.)
  console.log('Données collectées :', donnees);
  res.send('Données collectées avec succès');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});