import BoardPositions from "../contants/BoardPositions";
import PokeTypes from "../contants/PokeTypes";
import Pokemon from "../Pokemon";

export enum ActionType {
    ATTACK,
    RETREAT,
    EVOLVE,
    PLAY_POKEMON,
    ATTACH_ENERGY,
    SWITCH_POKEMON
}

export interface ActionContext {
    playerIndex: number;
    sourcePosition?: BoardPositions;
    targetPosition?: BoardPositions;
    attackIndex?: number;
    pokemon?: Pokemon;
    energy?: PokeTypes;
}

export interface GameAction {
    type: ActionType;
    context: ActionContext;
    isValid: boolean;
}
