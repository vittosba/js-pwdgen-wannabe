const name = prompt('Quale è il tuo nome?');
const lastname = prompt('Quale è il tuo cognome?');
const favColor = prompt('Quale è il tuo colore preferito?');

const password = `${name}${lastname}${favColor}21`;

document.getElementById('password').innerHTML = password;