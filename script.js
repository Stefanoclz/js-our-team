console.log('JS OK');

// prendo il riferimento HTML del container in cui stampare le card.

const container = document.querySelector('.team-container');

// prendo il riferimento HTML del bottone per aggiungere membri al team.

const addBtn = document.getElementById('addMemberButton');

// dichiaro l'array di oggetti con i membri del team attualmente conosciuti.

const myTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "img/angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "img/walter-gordon-office-manager.jpg",
    },
];

// genero un ciclo per scorrere i valori degli oggeti nell'array ed assegnarli
// ad una nuova card con i valori presenti nell'oggetto dell'array.

console.log(myTeam.length);
function generateCard() {
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
        let memberName = document.createElement('h3');
        memberName.innerText = myTeam[i].nome;
        text.appendChild(memberName);
        let memberRole = document.createElement('p');
        memberRole.innerText = myTeam[i].ruolo;
        text.appendChild(memberRole);
    }
}


// aggiungo un evento al click del bottone del form per creare una nuova card
// e creare un nuovo oggetto da aggiungere all'array di oggeti principali.

addBtn.addEventListener('click', function () {
    let newName = document.getElementById('name').value;
    let newRole = document.getElementById('role').value;
    let newImg = document.getElementById('image').value;

    let newMember = {
        nome: newName,
        ruolo: newRole,
        foto: newImg,
    };

    myTeam.push(newMember);

    container.innerText = '';

    generateCard();
    /*
        let newCard = document.createElement('div');
        container.appendChild(newCard);
        newCard.classList.add('team-card');
    
        let newMemberImage = document.createElement('div');
        newCard.appendChild(newMemberImage);
        newMemberImage.classList.add('card-image');
        let newFoto = document.createElement('img');
        newFoto.src = newImg;
        newMemberImage.appendChild(newFoto);
    
        let newText = document.createElement('div');
        newCard.appendChild(newText);
        newText.classList.add('card-text');
    
        let newMemberName = document.createElement('h3');
        newMemberName.innerText = newName;
        newText.appendChild(newMemberName);
    
        let newMemberRole = document.createElement('p');
        newMemberRole.innerText = newRole;
        newText.appendChild(newMemberRole);
        */

    console.log(myTeam);
})

generateCard();