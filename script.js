const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// only change the one flashcard
const card = document.getElementById("flashcard");
const p = card.querySelector("#card-content");

// Start with this function to simply display the card
function displayCard() {

    

    if(showingTerm){
        p.innerText = flashcards[currentIndex]["term"];
    } else{
        p.innerText = flashcards[currentIndex]["definition"];
    }

}

// use for event listener
function toggleTerm(){
    showingTerm = !showingTerm;
    // redisplay card after toggling

    displayCard();
}

// check if user wants to see the definition
card.addEventListener("click", () => toggleTerm());




const nextTerm = document.getElementById("next-btn");
const prevTerm = document.getElementById("prev-btn");

nextTerm.addEventListener('click', () => toggleNext());
prevTerm.addEventListener('click', () => togglePrev());



// move to next Term
// use for event listener on nextTerm
function toggleNext(){
    // prevent out of range exception
    if(currentIndex < flashcards.length-1){
        currentIndex++;
    } else{
        currentIndex = 0;
    }
    showingTerm = true;
    displayCard();
}
// listener on prevTerm
function togglePrev(){
    // prevent out of range exception
    if(currentIndex > 0){
        currentIndex--;
    } else{
        currentIndex = flashcards.length - 1;
    }
    showingTerm = true;
    displayCard();
}


const newTerm = document.getElementById("new-term");
const newDefinition = document.getElementById("new-definition");

// event listener for 
function addCard(){

    // input tag items are accessed differently
    let term = newTerm.value.trim();

    let definition = newDefinition.value.trim();


    if(term !== null && term !== "" &&
        definition !== null && definition !== "" && term !== definition){

            flashcards.push({"term": term, "definition" : definition});
           
            // clear the form values
            newTerm.value = "";
            newDefinition.value = "";

            // display new Card (is at the end of the list)
            currentIndex = flashcards.length - 1;
            showingTerm = true;

            displayCard();

        }

}

const addBtn = document.getElementById("add-card-btn");

addBtn.addEventListener('click', () => addCard());










// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;
