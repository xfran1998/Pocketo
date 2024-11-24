import GameManager from './GameManager';
import Pokemon from './Pokemon';
import PokeTypes from './contants/PokeTypes';
import { SetEnergy } from './types/Energy';

class Player {
    private deck: Pokemon[] = [];
    private hand: Pokemon[] = [];
    private readonly generableEnergyTypes: SetEnergy = new Set<PokeTypes>([
        PokeTypes.FIRE,
        PokeTypes.WATER,
    ]);

    constructor(deck: Pokemon[]) {
        this.deck = [...deck];
    }

    drawCard(): Pokemon | null {
        if (this.deck.length === 0) return null;
        const card = this.deck.pop()!;
        if (this.hand.length < 10) {
            this.hand.push(card);
            return card;
        }
        return null;
    }

    drawBasicPokemon(): Pokemon | null {
        const basicPokemon = this.deck.find(pokemon => pokemon.isBasic);
        if (basicPokemon) {
            this.deck = this.deck.filter(pokemon => pokemon !== basicPokemon);
            return basicPokemon;
        }
        return null;
    }

    drawInitialHand(): void {
        // Draw 5 cards
        for (let i = 0; i < GameManager.INIT_HAND_SIZE-1; i++) {
            this.drawCard();
        }

        // Check if there's at least one basic Pokemon
        if (this.hand.some(pokemon => pokemon.isBasic)) {
            // Shuffle hand back into deck
            this.drawCard();
        }
        else {
            // Draw until a basic Pokemon is found
            let basicPokemon = this.drawBasicPokemon();
            if (basicPokemon)
                this.hand.push(basicPokemon);
            else
                throw new Error('No basic Pokemon found on init hand!');
        }
    }

    generateTurnEnergy(): PokeTypes {
        const index = Math.floor(Math.random() * this.generableEnergyTypes.size);

        const it = this.generableEnergyTypes.values();

        for (let i = 0; i < index; i++) {
            it.next();
        }
        
        return it.next().value;
    }    
}

export default Player;