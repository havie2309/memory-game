const icons = ['🐷', '🐭', '🐰', '🐻', '🐻‍❄️', '🐨', '🐼', '🐸', '🐯', '🐮']
const icons2 = [...icons]

const grid = document.getElementById("grid")
const scoreElement = document.getElementById("score")
const restartButton = document.getElementById("restartButton")
const msgEl = document.querySelector(".msg")
const gameTimerEl = document.querySelector(".gameTimer")

let cards = []
let flippedCards = []
let moves = 0
let score = 0

let cardViewSeconds = 5
let totalGameTime = 90 // seconds

let checkMatchTimer = null;
let gameTimer = null;
let previewTimer = null;

// shuffle an array using Fisher-Yates algorithm
function shuffle(array){
    const newArray = [...array];
    for(let i = newArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Event listener for restart button
restartButton.addEventListener('click', restartGame)

// Restart the Game
function restartGame(){
    let msg = 'Do you want to start the game?'
    if(cards.length > 0){
        msg = 'All current progress will be lost, Do you want to continue?'
    }
    const res = window.confirm(msg)
    if (res){
        startGame()
    }
}

// function to initialize the timer and cards 
function startGame(){
    clearGame()
    
    // Shuffle icons for this game
    const shuffledIcons = shuffle([...icons, ...icons2])
    
    // Create cards
    for (let i = 0; i < shuffledIcons.length; i++){
        const card = document.createElement('div')
        card.classList.add('card')
        card.textContent = shuffledIcons[i]
        card.dataset.value = shuffledIcons[i]
        card.addEventListener('click', () => flipCard(card))
        grid.appendChild(card);
        cards.push(card);
    }
    
    moves = 0; 
    score = 0;
    scoreElement.style.display = "block";
    scoreElement.textContent = "Moves: 0";
    flippedCards = [];

    shuffleCards()
    showPreviewTimer()
}

//shuffle the cards
function shuffleCards(){
    const shuffledCards = shuffle(cards)
    shuffledCards.forEach(card => grid.appendChild(card))
}

// function to display the timer for starting the game.
// this will preview the cards until the timer expires
function showPreviewTimer(){
    let timeToShowTheCard = cardViewSeconds
    const timeMsgEl = msgEl.querySelector("span.time");
    msgEl.style.display = "block"
    timeMsgEl.innerHTML = timeToShowTheCard;
    
    previewTimer = setInterval(() => {
        timeToShowTheCard--
        timeMsgEl.innerHTML = timeToShowTheCard;
        if (timeToShowTheCard < 0){
            hideAllCards()
            clearInterval(previewTimer)
            msgEl.style.display = "none"
        }
    }, 1000)
}

// hide all the cards
function hideAllCards(){
    cards.forEach(card => {
        card.classList.add("flipped")
    });
    startGameTimer();
}

// function to handle the game time logic
function startGameTimer(){
    let gameTimeSeconds = totalGameTime
    gameTimerEl.style.display = "block"
    const gameTimerMsgEl = gameTimerEl.querySelector("span.time")
    gameTimerMsgEl.innerHTML = gameTimeSeconds
    
    gameTimer = setInterval(()=>{
        gameTimeSeconds--
        gameTimerMsgEl.innerHTML = gameTimeSeconds
        if(gameTimeSeconds < 0){
            clearInterval(gameTimer)
            setTimeout(() => {
                const res = window.confirm('Game over! Do you want to start a new game?')
                clearGame()
                if(res){
                    startGame()
                }
            }, 100)
        }
    }, 1000)
}

// function to clear all the variables
function clearGame(){
    scoreElement.style.display = "none";
    msgEl.style.display = "none";
    gameTimerEl.style.display = "none";
    grid.innerHTML = ""
    cards = []
    flippedCards = []
    clearTimeout(checkMatchTimer)
    clearInterval(gameTimer)
    clearInterval(previewTimer)
}

// flip a card
function flipCard(card){
    // Don't flip if already matched or if two cards are already flipped
    if(card.classList.contains("matched")) return;
    if(flippedCards.length >= 2) return;
    if(flippedCards.includes(card)) return;
    
    if(card.classList.contains("flipped")){
        card.classList.remove("flipped");
        flippedCards.push(card);
        
        if(flippedCards.length === 2){
            checkMatchTimer = setTimeout(checkMatch, 1000)
        }
    }
}

// function to check if the cards match
function checkMatch(){
    moves++;
    scoreElement.textContent = `Moves: ${moves}`
    
    const [card1, card2] = flippedCards;
    
    if(card1.dataset.value === card2.dataset.value){
        card1.classList.add('matched');
        card2.classList.add('matched');
        score++
        
        if(score === icons.length){
            clearInterval(gameTimer)
            setTimeout(() => {
                const res = window.confirm(`Congratulations! You completed the game in ${moves} moves. Do you want to start a new game?`)
                clearGame();
                if(res){
                    startGame()
                }
            }, 500)
        }
    } else {
        card1.classList.add('flipped');
        card2.classList.add('flipped');
    }
    
    flippedCards = [];
}