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
    }
]

for (let i = 0; i < myTeam.length; i++) {
    container.appendChild(card);
}