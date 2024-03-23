export class PlayerView {

    constructor(parentElement, playerModel){
        // creates the container
        const container = document.createElement('div');
        container.classList.add('player');
        parentElement.append(container);

        // creates the heading
        const header = document.createElement('h2');
        header.textContent = playerModel.name;
        container.append(header);

        // creates the heading
        const avatar = document.createElement('img');
        avatar.src = playerModel.avatar;
        container.append(avatar);

        // creates the score section
        const scoreContainer = document.createElement('div');
        container.append(scoreContainer);

        // creates the text
        const scoreText = document.createTextNode('Score: ');
        scoreContainer.append(scoreText);

        // creates the score span
        const scoreSpan = document.createElement('span');
        scoreSpan.textContent = playerModel.score;
        scoreContainer.append(scoreSpan);
    }
}