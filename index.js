let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    cards = [getRandomCard(), getRandomCard()];
    sum = cards[0] + cards[1];
    hasBlackJack = false;
    isAlive = true;
    message = "";
    renderGame();
}

function getRandomCard() {
    let cardNum = Math.floor(Math.random() * 13) + 1;
    if (cardNum === 1) {
        cardNum += 10;
    } else if (cardNum > 10) {
        cardNum = 10;
    }
    return cardNum;
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        card = cards[i];
        cardsEl.textContent += card + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive & !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
