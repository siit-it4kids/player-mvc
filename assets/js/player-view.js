export class PlayerView {

    constructor(parentElement, playerModel){
        this.parentElement = parentElement;
        this.playerModel = playerModel;
        this.scoreSpan = null;

        this.createComponent();
        this.update();
    }


    createComponent(){
        // creates the container
        const container = document.createElement('div');
        container.classList.add('player');
        this.parentElement.append(container);

        // creates the heading
        const header = document.createElement('h2');
        header.textContent = this.playerModel.name;
        container.append(header);

        // creates the heading
        const avatar = document.createElement('img');
        avatar.src = this.playerModel.avatar;
        container.append(avatar);

        // creates the score section
        const scoreContainer = document.createElement('div');
        container.append(scoreContainer);

        // creates the text
        const scoreText = document.createTextNode('Score: ');
        scoreContainer.append(scoreText);

        // creates the score span
        this.scoreSpan = document.createElement('span');
        scoreContainer.append(this.scoreSpan);
    }

    update(){
        console.log(`Should update score in UI: ${this.playerModel.score}`);
        this.scoreSpan.textContent = this.playerModel.score;
    }
}