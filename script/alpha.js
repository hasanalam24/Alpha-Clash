// function play() {
//     // step-1 : hide the home screen to hide the screen addd the class hidden t the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }


// eta 2nd korsi
function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    console.log('your', alphabet);

    // set randomly generated alphabet to the screen (show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}



// eta 1st korsi
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}