console.log('JS OK');

const container = document.querySelector('.team-container');

let card = document.createElement('div');

card.classList.add('team-card');

let image = document.createElement('div');

image.classList.add('card-image');

let text = document.createElement('div');

text.classList.add('card-text');

const myTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "",
    },
];

console.log(myTeam.length);

for (let i = 0; i < myTeam.length; i++) {
    container.appendChild(card);
    card.appendChild(image);
    card.appendChild(text);
}

