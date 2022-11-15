const inputs =  document.querySelector('.inputs');
const resetGameBtn =  document.querySelector('.reset');
const hint = document.querySelector('.hint span');
const addInputs = document.querySelector('.add-inputs')

//run randomWord func whenever reset button is clicked
resetGameBtn.addEventListener('click', randomWord);
//listen for a click and focus input from click in addInputs input box
document.addEventListener('keydown', () => {addInputs.focus()});
addInputs.addEventListener('input', gameFunc)

function randomWord(){
    let randomSelect = wordLists[Math.floor(Math.random() * wordLists.length)]
    //getting word property from random object
    let word = randomSelect.word
    console.log(word)
    hint.innerHTML = randomSelect.hint

    let input = '';
    for (let i = 0; i < word.length; i++) {
        input += '<input type="text" disabled>'
    }
    
    inputs.innerHTML = input;
}
randomWord();

function gameFunc(e){
    let value = e.target.value;
    console.log(value) 
}

