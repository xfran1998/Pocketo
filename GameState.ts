import Board from "./Board";
import Player from "./Player";
import Pokemon from "./Pokemon";
import Turn from "./Turn";

export class GameState {
    private _board: Board;
    private _currentTurn: number;
    private _playersTurn: Turn[];
    private readonly _player1: Player;
    private readonly _player2: Player;

    constructor(player1Deck: Pokemon[], player2Deck: Pokemon[]) {
        this._player1 = new Player(player1Deck);
        this._player2 = new Player(player2Deck);
        this._board = new Board(this._player1, this._player2);
        
    }

    get board(): Board {
        return this._board;
    }

    get currentTurn(): Turn {
        return this._playersTurn[this._currentTurn];
    }

    get turnCount(): number {
        return this._currentTurn;
    }

    get hasGameMaxTurns(): boolean {
        return this._currentTurn === 30;
    }
}