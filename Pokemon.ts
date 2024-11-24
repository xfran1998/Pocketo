import Attack from "./Attack";
import PokeTypes from "./contants/PokeTypes";
import EnergyManager from "./EnergyManager";
import BoardPositions from "./contants/BoardPositions";
import { MultipleEnergy } from "./types/Energy";

class Pokemon {
    private _name: string;
    private _isBasic: boolean;
    private _pokeType: PokeTypes;
    private _attacks: Attack[] = [];
    private _energyAttached: EnergyManager;
    private _weakness: PokeTypes | null = null; // Can be null
    private _resistance: PokeTypes | null = null;
    private _retreatCost: MultipleEnergy;
    private _boardPosition: BoardPositions;

    constructor(
        name: string, 
        pokeType: PokeTypes, 
        attacks: Attack[] = [], 
        weakness: PokeTypes | null = null,
        resistance: PokeTypes | null = null,
        retreatCost: MultipleEnergy = new Map(),
        isBasic: boolean = false,
        boardPosition: BoardPositions = BoardPositions.DECK
    ) {
        this._name = name;
        this._pokeType = pokeType;
        this._attacks = attacks;
        this._energyAttached = new EnergyManager();
        this._weakness = weakness;
        this._resistance = resistance;
        this._retreatCost = retreatCost;
        this._isBasic = isBasic;
        this._boardPosition = boardPosition;
    }

    useAttack(index: number): void {
        if (index < 0 || index >= this._attacks.length) {
            console.error(`${this._name} doesn't have attack number ${index + 1}!`);
            throw new Error('Invalid attack index');
        }

        const attack = this._attacks[index];
        if (!this._energyAttached.hasEnough(attack.energyRequirements)) {
            console.error(`${this._name} doesn't have enough energy for ${attack.name}!`);
            throw new Error('Not enough energy');
        }

        this._energyAttached.removeMultipleEnergy(attack.energyRequirements);
        console.log(`${this._name} used ${attack.name}!`);
    }

    // Getters
    get name(): string {
        return this._name;
    }

    get pokeType(): PokeTypes {
        return this._pokeType;
    }

    get attacks(): Attack[] {
        return [...this._attacks]; // Return a copy to prevent direct modification
    }

    get weakness(): PokeTypes | null {
        return this._weakness;
    }

    get resistance(): PokeTypes | null {
        return this._resistance;
    }

    // Rename getter from energyCost to energyAttached
    get energyAttached(): PokeTypes[] {
        return this._energyAttached.toArray(); // Using toArray instead of getEnergies
    }

    get retreatCost(): MultipleEnergy {
        return new Map(this._retreatCost); // Return copy to prevent direct modification
    }

    get isBasic(): boolean {
        return this._isBasic;
    }

    get boardPosition(): BoardPositions {
        return this._boardPosition;
    }

    set boardPosition(position: BoardPositions) {
        if (position === BoardPositions.GRAVEYARD) {
            throw new Error('Cannot move Pokemon to graveyard!');
        }
        if (position === BoardPositions.DECK) {
            this._energyAttached = new EnergyManager();
        }
        this._boardPosition = position;
    }

    // Methods to safely modify arrays
    addEnergyAttached(energy: PokeTypes) {
        this._energyAttached.addEnergy(energy);
    }

    removeEnergyAttached(type: PokeTypes) {
        return this._energyAttached.removeEnergy(type);
    }

    getAvailableAttacks(): Attack[] {
        return this._attacks.filter(attack => 
            this._energyAttached.hasEnough(attack.energyRequirements)
        );
    }
    
    retreat(): boolean {
        return this._energyAttached.removeMultipleEnergy(this._retreatCost);
    }

    evolve(pokemon: Pokemon): boolean {
    }

    // Interface methods


}

export default Pokemon;