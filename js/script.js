import ancientsData from '../data/ancients.js'
import difficulties from '../data/difficulties.js'
import cards_green from '../assets/MythicCards/green/index.js'
import cards_brown from '../assets/MythicCards/brown/index.js'
import cards_blue from '../assets/MythicCards/blue/index.js'

console.log(ancientsData) // ----------------------  DELETE
console.log(cards_green) // ----------------------  DELETE


const ancients_block = document.querySelector('.ancients');
const difficulties_block = document.querySelector('.difficulties');
const button_shuffle = document.querySelector("#button_shuffle");
const deck_block = document.querySelector('.deck_block');
const stages_block = document.querySelector('.stages_block');

let card_selected = {};

ancientsData.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('ancient_card');
  li.innerHTML = `<img id="${el.id}" class="ancient_card_img" src="${el.cardFace}" alt="card ${el.id}">
                  <p>${el.name}</p>` 
  ancients_block.append(li);
  li.addEventListener("click", selectCard)
})


function selectCard(el) {
  card_selected = ancientsData[Array.from(el.target.parentElement.parentElement.children).indexOf(el.target.parentElement)];
  console.log(el.target.nextElementSibling) // ----------------------  DELETE  

  hide_items()
  setTimeout(show_difficulties, 100) 
}

function hide_items() {
  difficulties_block.parentElement.classList.add('hidden')
  button_shuffle.parentElement.classList.add('hidden')
  deck_block.classList.add('hidden')
}

function show_difficulties() {   
  difficulties_block.innerHTML = "";
  difficulties_block.parentElement.classList.remove('hidden')
  difficulties.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('difficulty_card');
    li.innerHTML = `${el.name}` 
    difficulties_block.append(li);
    li.addEventListener("click", selectDifficulty)

  })
}

function selectDifficulty(el) {
  button_shuffle.parentElement.classList.remove('hidden')
  let difficulty_selected = difficulties[Array.from(el.target.parentElement.parentElement.children).indexOf(el.target.parentElement)];
  console.log(difficulty_selected) // ----------------------  DELETE
  
  button_shuffle.addEventListener("click", shuffle)

}

function shuffle(el) {
  deck_block.classList.remove('hidden')
  console.log(el.target) // ----------------------  DELETE
 

  let currentCards = [[card_selected.firstStage.greenCards, card_selected.firstStage.brownCards, card_selected.firstStage.blueCards],
                      [card_selected.secondStage.greenCards, card_selected.secondStage.brownCards, card_selected.secondStage.blueCards],
                      [card_selected.thirdStage.greenCards, card_selected.thirdStage.brownCards, card_selected.thirdStage.blueCards]];


  stages_block.innerHTML = `<div class="stage_row stage1_cards_counter">
                                    <div>1й этап:</div>
                                    <div class="circle green">${currentCards[0][0]}</div>
                                    <div class="circle brown">${currentCards[0][1]}</div>
                                    <div class="circle blue">${currentCards[0][2]}</div>
                                  </div>
                                  <div class="stage_row stage2_cards_counter">
                                    <div>2й этап:</div>
                                    <div class="circle green">${currentCards[1][0]}</div>
                                    <div class="circle brown">${currentCards[1][1]}</div>
                                    <div class="circle blue">${currentCards[1][2]}</div>
                                  </div>
                                  <div class="stage_row stage3_cards_counter">
                                    <div>3й этап:</div>
                                    <div class="circle green">${currentCards[2][0]}</div>
                                    <div class="circle brown">${currentCards[2][1]}</div>
                                    <div class="circle blue">${currentCards[2][2]}</div>
                                  </div>`

  let deck_full_green = { ...cards_green};
  let deck_full_brown = { ...cards_brown};
  let deck_full_blue = { ...cards_blue};

  let deck_stage1 = [];
  let deck_stage2 = [];
  let deck_stage3 = [];

  for (let i = 0; i < card_selected.firstStage.greenCards; i++) {    
    let randomCard;
    do { randomCard = 'green' + getRandomInt(1, Object.keys(deck_full_green).length + 1) }
    while (deck_full_green[randomCard] === undefined);     
    deck_stage1.push(deck_full_green[randomCard]);
    delete deck_full_green[randomCard]; 
  }
  
  for (let i = 0; i < card_selected.firstStage.brownCards; i++) {    
    let randomCard;
    do { randomCard = 'brown' + getRandomInt(1, Object.keys(deck_full_brown).length + 1) }
    while (deck_full_brown[randomCard] === undefined);     
    deck_stage1.push(deck_full_brown[randomCard]);
    
    delete deck_full_brown[randomCard]; 
  }

  for (let i = 0; i < card_selected.firstStage.blueCards; i++) {    
    let randomCard;
    do { randomCard = 'blue' + getRandomInt(1, Object.keys(deck_full_blue).length + 1) }
    while (deck_full_blue[randomCard] === undefined);     
    deck_stage1.push(deck_full_blue[randomCard]);
    delete deck_full_blue[randomCard]; 
  }
  console.log('stage1', deck_stage1)



  for (let i = 0; i < card_selected.secondStage.greenCards; i++) {    
    let randomCard;
    do { randomCard = 'green' + getRandomInt(1, Object.keys(deck_full_green).length + 1) }
    while (deck_full_green[randomCard] === undefined);     
    deck_stage2.push(deck_full_green[randomCard]);
    delete deck_full_green[randomCard]; 
  }
  
  for (let i = 0; i < card_selected.secondStage.brownCards; i++) {    
    let randomCard;
    do { randomCard = 'brown' + getRandomInt(1, Object.keys(deck_full_brown).length + 1) }
    while (deck_full_brown[randomCard] === undefined);     
    deck_stage2.push(deck_full_brown[randomCard]);
    
    delete deck_full_brown[randomCard]; 
  }

  for (let i = 0; i < card_selected.secondStage.blueCards; i++) {    
    let randomCard;
    do { randomCard = 'blue' + getRandomInt(1, Object.keys(deck_full_blue).length + 1) }
    while (deck_full_blue[randomCard] === undefined);     
    deck_stage2.push(deck_full_blue[randomCard]);
    delete deck_full_blue[randomCard]; 
  }
  console.log('stage2', deck_stage2)



  for (let i = 0; i < card_selected.thirdStage.greenCards; i++) {    
    let randomCard;
    do { randomCard = 'green' + getRandomInt(1, Object.keys(deck_full_green).length + 1) }
    while (deck_full_green[randomCard] === undefined);     
    deck_stage3.push(deck_full_green[randomCard]);
    delete deck_full_green[randomCard]; 
  }
  
  for (let i = 0; i < card_selected.thirdStage.brownCards; i++) {    
    let randomCard;
    do { randomCard = 'brown' + getRandomInt(1, Object.keys(deck_full_brown).length + 1) }
    while (deck_full_brown[randomCard] === undefined);     
    deck_stage3.push(deck_full_brown[randomCard]);
    
    delete deck_full_brown[randomCard]; 
  }

  for (let i = 0; i < card_selected.thirdStage.blueCards; i++) {    
    let randomCard;
    do { randomCard = 'blue' + getRandomInt(1, Object.keys(deck_full_blue).length + 1) }
    while (deck_full_blue[randomCard] === undefined);     
    deck_stage3.push(deck_full_blue[randomCard]);
    delete deck_full_blue[randomCard]; 
  }
  console.log('stage3', deck_stage3)
  



}






function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}