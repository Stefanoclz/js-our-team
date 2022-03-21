console.log('JS OK');

// prendo il riferimento HTML del container in cui stampare le card.

const container = document.querySelector('.team-container');

// prendo il riferimento HTML del bottone per aggiungere membri al team.

const addBtn = document.getElementById('addMemberButton');

/*****************INIZIO DEFINIZIONE FUNZIONI****************/

// Creo una funzione per generare una CARD, dentro cui verranno inseriti 
// gli altri elementi per completare il contenuto della card.

function mainCardGenerator(element) {
    container.appendChild(element);
    element.classList.add('team-card');
}

// Creo una funzione per leggere il contenuto degli elementi nell'array
// e aggiunmgere SOLO LE IMMAGINI alle card da generare.

function imageGenerator(index, element) {
    let image = document.createElement('div');
    element.appendChild(image);
    image.classList.add('card-image');
    let memberFoto = document.createElement('img');
    memberFoto.src = myTeam[index].foto
    image.appendChild(memberFoto);
}

// Creo una funzione per leggere il contenuto degli elementi nell'array
// e aggiunmgere SOLO IL TESTO alle card da generare.

function textGenerator(index, element) {
    let text = document.createElement('div');
    element.appendChild(text);
    text.classList.add('card-text');
    let memberName = document.createElement('h3');
    memberName.innerText = myTeam[index].nome;
    text.appendChild(memberName);
    let memberRole = document.createElement('p');
    memberRole.innerText = myTeam[index].ruolo;
    text.appendChild(memberRole);
}

// genero un ciclo per avviare le funzioni e ripeterle in base alla quantità di
// elementi presenti nell'array dei membri, dichiarando prima al suo interno
// la creazione del div dentro cui scrivere che verrà stampato
// ad ogni ciclo all'interno del container principale.

function generateCard() {
    for (let i = 0; i < myTeam.length; i++) {

        let card = document.createElement('div');

        mainCardGenerator(card);

        imageGenerator(i, card);

        textGenerator(i, card);

    }
}

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


// aggiungo un evento al click del bottone del form per creare una nuova card
// e creare un nuovo oggetto da aggiungere all'array di oggetti principali.

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
    
    // prima versione del codice, troppo lunga e di difficle lettura.

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