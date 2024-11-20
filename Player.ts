
import GameManager from './GameManager';
import Pokemon from './Pokemon';
import PokeTypes from './contants/PokeTypes';

class Player {
    private deck: Pokemon[] = [];
    private hand: Pokemon[] = [];

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

    
}

export default Player;