const bonnesReponses = {
  Q1: ['Rabat'],
  Q2: ['Java'],
  Q3: ['html', 'CSS', 'Javascript'],
  Q4: ['Firefox', 'Microsoft Edge'],
  Q5: ['Entier (int)', 'Chaîne (string)', 'Booléen (boolean)']
};

function initialiser() {
  document.getElementById("qcmForm").reset();
}

function getReponses() {
  const form = document.forms['qcmForm'];
  const rep = {};
  for (let i = 1; i <= 5; i++) {
    const q = 'Q' + i;
    const elements = form[q];
    rep[q] = [];
    for (let el of elements) {
      if (el.checked) rep[q].push(el.value);
    }
  }
  return rep;
}

function afficherResultat() {
  const reponses = getReponses();
  let resultat = '';
  let score = 0;
  for (let i = 1; i <= 5; i++) {
    const q = 'Q' + i;
    const correctes = bonnesReponses[q].sort().toString();
    const utilisateur = (reponses[q] || []).sort().toString();
    if (correctes === utilisateur) {
      resultat += `Question ${i} : Correcte<br>`;
      score++;
    } else {
      resultat += `Question ${i} : Incorrecte<br>`;
    }
  }
  resultat += `<br><b>Score : ${score}/5</b>`;
  const fenetre = window.open("", "Résultat", "width=300,height=300");
  fenetre.document.write(`<html><head><title>Résultat</title></head><body>${resultat}</body></html>`);
}

function afficherCorrige() {
  const corrige = `
    <h3>Corrigé du QCM</h3>
    <p><b>1.</b> La capitale du Maroc est : <u>Rabat</u></p>
    <p><b>2.</b> Le langage orienté objet est : <u>Java</u></p>
    <p><b>3.</b> Langages front-end : <u>HTML</u>, <u>CSS</u>, <u>JavaScript</u></p>
    <p><b>4.</b> Navigateurs web : <u>Firefox</u>, <u>Microsoft Edge</u></p>
    <p><b>5.</b> Types de données : <u>Entier (int)</u>, <u>Chaîne (string)</u>, <u>Booléen (boolean)</u></p>
  `;
  const fenetre = window.open("", "Corrigé", "width=500,height=400");
  fenetre.document.write(`<html><head><title>Corrigé</title></head><body>${corrige}</body></html>`);
}
