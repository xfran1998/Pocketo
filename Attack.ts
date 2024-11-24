import PokeTypes from "./contants/PokeTypes";
import EnergyManager from "./EnergyManager";
import { MultipleEnergy } from "./types/Energy";

class Attack {
    private _damage: number;
    private _name: string;
    private _energyRequirements: MultipleEnergy;
    
    constructor(
        damage: number, 
        name: string, 
        energyRequirements: MultipleEnergy = new Map() 
    ) {
        this._damage = damage;
        this._name = name;
        this._energyRequirements = energyRequirements;
    }
    
    get damage(): number {
        return this._damage;
    }
    
    get name(): string {
        return this._name;
    }

    get energyRequirements(): MultipleEnergy {
        return this._energyRequirements;
    }
}

export default Attack;