class Pokemon {
    name: string;
    type: string;
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
    attack() {
        console.log(`${this.name} used Tackle!`);
    }
}

export default Pokemon;