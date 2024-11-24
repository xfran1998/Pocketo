import Player from './Player';
import Pokemon from './Pokemon';
import BoardPositions from './contants/BoardPositions';
import GameManager from './GameManager';
import { PlayerIndex } from './types/Players';
import { BenchRows } from './types/Board';

class InvalidPlayerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidPlayerError';
    }
}

class Board {
    private readonly player1: Player;
    private readonly player2: Player;
    private currentTurn: number = 0;
    private activePlayer: PlayerIndex = 0;

    private readonly activePokemon: [Pokemon | null, Pokemon | null] = [null, null];
    private readonly benchedPokemon: BenchRows = [
        [null, null, null],
        [null, null, null]
    ];

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
    }

    determineFirstPlayer(): void {
        this.activePlayer = Math.random() < 0.5 ? 0 : 1;
    }

    switchActivePlayer(): void {
        this.activePlayer = this.activePlayer === 0 ? 1 : 0;
        this.currentTurn++;
    }

    isGameOver(): boolean {
        return this.currentTurn >= 30;
    }

    getActivePlayer(): Player {
        return this.activePlayer === 0 ? this.player1 : this.player2;
    }

    getActivePokemon(): Pokemon | null {
        return this.activePokemon[this.activePlayer];
    }

    getNonActivePlayer(): Player {
        return this.activePlayer === 0 ? this.player2 : this.player1;
    }

    private validatePlayerIndex(playerIndex: number): asserts playerIndex is PlayerIndex {
        if (playerIndex !== 0 && playerIndex !== 1) {
            throw new InvalidPlayerError(`Player index must be 0 or 1, got ${playerIndex}`);
        }
    }

    private validateBenchPosition(position: number): void {
        if (position < 0 || position >= GameManager.BENCH_SIZE) {
            throw new Error(`Bench position must be between 0 and ${GameManager.BENCH_SIZE - 1}`);
        }
    }

    canPlayPokemon(playerIndex: number, boardPosition: BoardPositions, positionIndex?: number): boolean {
        try {
            this.validatePlayerIndex(playerIndex);
            
            switch (boardPosition) {
                case BoardPositions.ACTIVE:
                    return this.activePokemon[playerIndex] === null;
                case BoardPositions.BENCH:
                    if (positionIndex === undefined) {
                        return false;
                    }
                    this.validateBenchPosition(positionIndex);
                    return this.benchedPokemon[playerIndex][positionIndex] === null;
                default:
                    return false;
            }
        } catch {
            return false;
        }
    }

    playPokemon(playerIndex: number, boardPosition: BoardPositions, pokemon: Pokemon, positionIndex?: number): boolean {
        try {
            this.validatePlayerIndex(playerIndex);
            
            if (!this.canPlayPokemon(playerIndex, boardPosition, positionIndex)) {
                return false;
            }

            switch (boardPosition) {
                case BoardPositions.ACTIVE:
                    this.addPokemonToActive(playerIndex, pokemon);
                    break;
                case BoardPositions.BENCH:
                    if (positionIndex !== undefined) {
                        this.addPokemonToBenchPosition(playerIndex, pokemon, positionIndex);
                    }
                    break;
                default:
                    return false;
            }

            return true;
        } catch {
            return false;
        }
    }

    addPokemonToActive(playerIndex: number, pokemon: Pokemon): void {
        this.activePokemon[playerIndex] = pokemon;
    }

    addPokemonToBenchPosition(playerIndex: number, pokemon: Pokemon, position: number): void {
        if (position >= 0 && position < 3) {
            this.benchedPokemon[playerIndex][position] = pokemon;
        }
    }

    // Obtener los Pokémon de un jugador
    getBenchedPokemon(playerIndex: number): (Pokemon | null)[] {
        this.validatePlayerIndex(playerIndex);
        return this.benchedPokemon[playerIndex];
    }
}

export default Board;