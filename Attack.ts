import PokeTypes from "./contants/PokeTypes";
import EnergyManager from "./EnergyManager";

class Attack {
    private _damage: number;
    private _name: string;
    private _energyRequirements: EnergyManager;
    
    constructor(
        damage: number, 
        name: string, 
        energyRequirements: PokeTypes[] = []
    ) {
        this._damage = damage;
        this._name = name;
        this._energyRequirements = new EnergyManager(energyRequirements);
    }
    
    get damage(): number {
        return this._damage;
    }
    
    get name(): string {
        return this._name;
    }

    get energyRequirements(): EnergyManager {
        return this._energyRequirements;
    }
}

export default Attack;