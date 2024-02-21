// function play() {
//     // step-1 : hide the home screen to hide the screen addd the class hidden t the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }
const audio = new Audio()

let isGamePlayOn = false;

const artBoard = document.getElementById('art-board');

const modalBox = document.getElementById('modal-box')

function handleKeyboardButtonPress(event) {
    if (isGamePlayOn == false) return;
    const playerPressed = event.key;
    // console.log('player Pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver()
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(currentAlphabetElement.innerText)
    // console.log(playerPressed, expectedAlphabet)




    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');

        audio.src = "audio/success-1-6297.mp3"
        audio.play()

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore)
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)


        // _______________________________
        // update score_________
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the updates score
        // currentScoreElement.innerText = newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {
        console.log('dhur vaiya ..right key press koro')

        audio.src = "audio/failure-drum-sound-effect-2-7184.mp3"
        audio.play()



        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;

        // bonus-29.5 module reward 2
        const updatedLifePercentage = (updatedLife / 5) * 100;

        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%,red)`

        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            // console.log('game over')
            gameOver();

        }

        // ________________________________
        //step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updates life count
        // currentLifeElement.innerText = newLife;
    }
}

// capture key
document.addEventListener('keyup', handleKeyboardButtonPress)


// eta 2nd korsi
function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // console.log('your', alphabet);

    // set randomly generated alphabet to the screen (show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}



// eta 1st korsi
function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    isGamePlayOn = true;
    continueGame()

}

function gameOver() {
    hideElementById('play-ground')
    showElementById('final-score');

    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore)

    // clear the last selected alphabet bg
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
    isGamePlayOn = false;

    artBoard.style.background = 'linear-gradient(#FFFFFFB3 100%,red)'
}


function modalOpen(event) {
    // console.log(event)
    if (event.clientY < 30) {
        modalBox.style.display = 'flex'
    }
}

function modalClose() {
    modalBox.style.display = 'none'
}

document.body.onmousemove = modalOpen;
