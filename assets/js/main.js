import { PlayerModel } from "./player-model.js";
import { PlayerView } from "./player-view.js";

const playersContainer = document.querySelector('#players');

const p1 = new PlayerModel('Gina', 'Tiger');
p1.changeScore(6);
console.log(p1);
const pv1 = new PlayerView(playersContainer, p1); 


const p2 = new PlayerModel('Titi', 'Oreo');
p2.changeScore(4);
console.log(p2);
const pv2 = new PlayerView(playersContainer, p2);