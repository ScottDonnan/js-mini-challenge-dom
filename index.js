// Scott Added this content!!!!


/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
const playerContainer = document.querySelector(".player-container")

PLAYERS.forEach(renderplayerContainer);

function renderplayerContainer(array){
    const cards = document.createElement('div');
    cards.className = 'player';
    cards.dataNumber = array.number;
    playerContainer.append(cards);

    const playerName = document.createElement('h3');
    // playerName.innerHTML(array.player)
    //playerContainer.appendChild();
    playerContainer.append(playerName);

    const image = document.createElement('img');
    image.src = array.photo;
    image.alt = array.player;
    playerContainer.append(image);
}


//select DOM element
//create div
//iterate through array to assign is elements to each div\
//append div to the 'div player-container'

/***** Deliverable 4 *****/