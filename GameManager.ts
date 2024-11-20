import Board from './Board';
import Player from './Player';
import Turn from './Turn';
import Pokemon from './Pokemon';
import BoardPositions from './contants/BoardPositions';

class GameManager {
    public static readonly MAX_TURNS = 30;
    public static readonly INIT_HAND_SIZE = 5;
    public static readonly BENCH_SIZE = 3;

    private player1: Player;
    private player2: Player;

    private board: Board;
    private currentTurn: Turn | null = null;

    constructor(player1Deck: Pokemon[], player2Deck: Pokemon[]) {
        this.player1 = new Player(player1Deck);
        this.player2 = new Player(player2Deck);
        this.board = new Board(this.player1, this.player2);
    }

    startGame(): void {
        // Initial setup
        this.board.determineFirstPlayer();
        
        // Draw initial hands
        this.board.getActivePlayer().drawInitialHand();
        this.board.getNonActivePlayer().drawInitialHand();
      

        // First turn setup
        this.currentTurn = new Turn(this.board.getActivePlayer());
    }

    executeTurn(): boolean {
        if (this.board.isGameOver()) {
            return false;
        }

        if (this.currentTurn?.isFinished()) {
            this.board.switchActivePlayer();
            this.currentTurn = new Turn(this.board.getActivePlayer());
        }

        return true;
    }

    playPokemonToBench(pokemon: Pokemon, position: number): boolean {
        const activePlayer = this.board.getActivePlayer();
        const playerIndex = activePlayer === this.player1 ? 0 : 1;
        
        return this.board.playPokemon(playerIndex, BoardPositions.BENCH, pokemon, position);
    }

    getGameStatus(): string {
        if (this.board.isGameOver()) {
            return 'Game Over - Draw';
        }
        return 'In Progress';
    }
}

export default GameManager;