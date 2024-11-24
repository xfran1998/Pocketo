import { GameState } from "./GameState";
import { ActionContext, ActionType, GameAction } from "./types/Actions";

class ActionValidator {
    private gameState: GameState;

    constructor(gameState: GameState) {
        this.gameState = gameState;
    }

    validateAction(action: GameAction): boolean {
        switch (action.type) {
            case ActionType.ATTACK:
                return this.validateAttack(action.context);
            case ActionType.RETREAT:
                return this.validateRetreat(action.context);
            case ActionType.EVOLVE:
                return this.validateEvolution(action.context);
            // Add other validation methods
            default:
                return false;
        }
    }

    private validateAttack(context: ActionContext): boolean {
        if (this.gameState.currentTurn.hasAttacked) return false;
        
        const activePokemon = this.board.getActivePokemon();
        if (!activePokemon) return false;

        const availableAttacks = activePokemon.getAvailableAttacks();
        return context.attackIndex !== undefined && 
               context.attackIndex < availableAttacks.length;
    }

    private validateRetreat(context: ActionContext): boolean {
        const activePokemon = this.board.getActivePokemon();
        if (!activePokemon) return false;

        const benchedPokemon = this.board.getBenchedPokemon(context.playerIndex);
        const hasBenchedPokemon = benchedPokemon.some(pokemon => pokemon !== null);
        
        return hasBenchedPokemon && 
               activePokemon.energyAttached.length >= 
               Array.from(activePokemon.retreatCost.values()).reduce((a, b) => a + b, 0);
    }

    private validateEvolution(context: ActionContext): boolean {
        // Add evolution validation logic
        return false;
    }
}
