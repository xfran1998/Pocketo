import Board from './Board';
import Player from './Player';
import Turn from './Turn';
import Pokemon from './Pokemon';
import BoardPositions from './contants/BoardPositions';
import { GameState } from './GameState';

class GameManager {
    public static readonly MAX_TURNS = 30;
    public static readonly INIT_HAND_SIZE = 5;
    public static readonly BENCH_SIZE = 3;

    private readonly gameState: GameState;

    constructor(player1Deck: Pokemon[], player2Deck: Pokemon[]) {
        
    }

    startGame(): void {
        // Initial setup
        this.gameState.board.determineFirstPlayer();
        
        // Draw initial hands
        this.gameState.board.getActivePlayer().drawInitialHand();
        this.gameState.board.getNonActivePlayer().drawInitialHand();
      

        // First turn setup
        
    }

    executeTurn(): boolean {
        if (this.gameState.board.isGameOver()) {
            return false;
        }

        if (this.gameState.currentTurn.isFinished()) {
            this.gameState.board.switchActivePlayer();
            this.gameState.currentTurn = new Turn(this.gameState.board.getActivePlayer());
        }

        return true;
    }

    playPokemonToBench(pokemon: Pokemon, position: number): boolean {
        if (position < 0 || position >= GameManager.BENCH_SIZE) {
            return false;
        }

        const activePlayer = this.gameState.board.getActivePlayer();
        const playerIndex = activePlayer === this.player1 ? 0 : 1;
        
        return this.gameState.board.playPokemon(playerIndex, BoardPositions.BENCH, pokemon, position);
    }

    getGameStatus(): string {
        if (this.gameState.board.isGameOver()) {
            return 'Game Over - Draw';
        }
        return 'In Progress';
    }
}

export default GameManager;