export class PlayerModel {

    constructor(name, avatar){
        this.name = name;
        this.avatar = `https://api.dicebear.com/8.x/adventurer/svg?seed=${avatar}`;
        this.score = 0;
    }

    changeScore(amount){
        // this.score = this.score + amount;
        this.score += amount;
    }
}