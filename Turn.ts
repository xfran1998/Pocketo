
import Player from './Player';
import Pokemon from './Pokemon';
import PokeTypes from './contants/PokeTypes';

class Turn {
    private player: Player;
    private hasAttacked: boolean = false;
    private energyGenerated: boolean = false;

    constructor(player: Player) {
        this.player = player;
    }

    generateEnergy(): boolean {
        if (!this.energyGenerated) {
            this.energyGenerated = true;
            return true;
        }
        return false;
    }

    attack(attackIndex: number): boolean {
        if (!this.hasAttacked) {
            // Implement attack logic
            this.hasAttacked = true;
            return true;
        }
        return false;
    }

    isFinished(): boolean {
        return this.hasAttacked;
    }
}

export default Turn;