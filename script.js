console.log('JS OK');

const container = document.querySelector('.team-container');

const myTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },
];

console.log(myTeam.length);

for (let i = 0; i < myTeam.length; i++) {
    let card = document.createElement('div');
    container.appendChild(card);
    card.classList.add('team-card');
    let image = document.createElement('div');
    card.appendChild(image);
    image.classList.add('card-image');
    let memberFoto = document.createElement('img');
    memberFoto.src = myTeam[i].foto
    image.appendChild(memberFoto);
    let text = document.createElement('div');
    card.appendChild(text);
    text.classList.add('card-text');
}


