const inputs =  document.querySelector('.inputs');
const resetGameBtn =  document.querySelector('.reset');
const hint = document.querySelector('.hint span');
const addInputs = document.querySelector('.add-inputs');
const wrongs = document.querySelector('.wrongs span');
const guessCount = document.querySelector('.guess-count span');


//run randomWord func whenever reset button is clicked
resetGameBtn.addEventListener('click', randomWord);
//listen for a click and focus input from click in addInputs input box
document.addEventListener('keydown', () => {addInputs.focus()});
addInputs.addEventListener('input', gameFunc)

//making variables below global variables(for universal access)
let word;
let incorrects = [];
let corrects = [];
let maxGuess;

function randomWord(){
    let randomSelect = wordLists[Math.floor(Math.random() * wordLists.length)]
    //getting word property from random object
    word = randomSelect.word
    console.log(word)
    maxGuess = 8;
    corrects = [];
    incorrects = [];
    hint.innerHTML = randomSelect.hint

    let input = '';
    for (let i = 0; i < word.length; i++) {
        input += '<input type="text" disabled>'
    }
    
    guessCount.innerHTML = maxGuess;
    inputs.innerHTML = input;
    wrongs.innerHTML = incorrects;
}
randomWord();

function gameFunc(e){
    let value = e.target.value;
    if(value.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${value}`) && !corrects.includes(value)){
        console.log(value) 
        //if value letter is in the 'word'
        if(word.includes(value)){
            for (let i = 0; i < word.length; i++) {
                if(word[i] === value){
                    corrects.push(value)
                    inputs.querySelectorAll('input')[i].value = value;
                }
                
            }
        }
        else{
            incorrects.push(` ${value}`);
            maxGuess--;
        }
        guessCount.innerHTML = maxGuess;
    }
    wrongs.innerHTML = incorrects;
    addInputs.value = '';

    setTimeout(() =>{
        if(corrects.length === word.length){
            //all found
            alert(`Awesome!, you found the word '${word.toUpperCase()}'`)
            randomWord()//reseting game
        }
        else if(maxGuess === 0){
            alert('Oops!, you are out of chances. Try another')
            for (let i = 0; i < word.length; i++){
                //showing word after exhausted guesses
                inputs.querySelectorAll('input')[i].value = word[i];
            }
            setTimeout(() =>{randomWord()}, 1000)
        }
    })
}

