import { PlayerModel } from "./player-model.js";
import { PlayerView } from "./player-view.js";

const playersContainer = document.querySelector('#players');
const newRoundBtn = document.querySelector('#new-round-btn');

newRoundBtn.addEventListener('click', function(){
    console.log('NEW ROUND!');
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    p1.changeScore(diceRoll);
    pv1.update();

    diceRoll = Math.floor(Math.random() * 6 + 1);
    p2.changeScore(diceRoll);
    pv2.update();

});

const p1 = new PlayerModel('Gina', 'Tiger');
const pv1 = new PlayerView(playersContainer, p1);

// p1.changeScore(6);
// pv1.update();

// p1.changeScore(8);
// pv1.update();


const p2 = new PlayerModel('Titi', 'Oreo');
const pv2 = new PlayerView(playersContainer, p2);

// p2.changeScore(4);
// pv2.update();

// p2.changeScore(10);
// pv2.update();