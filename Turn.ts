
import Player from './Player';
import Pokemon from './Pokemon';
import PokeTypes from './contants/PokeTypes';
import { PokeTurns } from './types/Energy';

class Turn {
    private static turnCount: number = 1;
    private activePlayer: Player;
    private hasAttacked: boolean = false;
    private hasPassed: boolean = false;
    private energyTaken: boolean = false;
    private energyTypeGenerable: PokeTurns;

    constructor(player: Player) {
        this.activePlayer = player;
        Turn.turnCount++;
        this.generateEnergy();
    }

    generateEnergy(): void {
        let currentTurnEnergy: PokeTypes;
        if (this.isFirstTurn()) {
            currentTurnEnergy = this.activePlayer.generateTurnEnergy();
        }
        else {
            currentTurnEnergy = this.energyTypeGenerable[1];
        }
        
        const nextEnergy = this.activePlayer.generateTurnEnergy();
        this.energyTypeGenerable = [currentTurnEnergy, nextEnergy];
    }

    isFirstTurn(): boolean {
        return Turn.turnCount <= 2;
    }

    attack(attackIndex: number): void {
        this.hasAttacked = true;
    }

    pass(): void {
        this.hasPassed = true;
    }

    isFinished(): boolean {
        return this.hasAttacked;
    }
}

export default Turn;