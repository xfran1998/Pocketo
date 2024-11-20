import PokeTypes from "./contants/PokeTypes";

class EnergyManager {
    private _energies: Map<PokeTypes, number> = new Map();

    constructor(energies: PokeTypes[] = []) {
        energies.forEach(energy => this.addEnergy(energy));
    }

    addEnergy(type: PokeTypes): void {
        this._energies.set(type, (this._energies.get(type) || 0) + 1);
    }

    removeEnergy(type: PokeTypes): boolean {
        const count = this._energies.get(type) || 0;
        if (count > 0) {
            this._energies.set(type, count - 1);
            return true;
        }
        return false;
    }

    getCount(type: PokeTypes): number {
        return this._energies.get(type) || 0;
    }

    hasEnough(required: EnergyManager): boolean {
        for (const [type, count] of required._energies) {
            const available = this._energies.get(type) || 0;
            if (available < count) return false;
        }
        return true;
    }

    consumeEnergy(required: EnergyManager) {
        if (!this.hasEnough(required)) return false;

        for (const [type, count] of required._energies) {
            const available = this._energies.get(type) || 0;
            this._energies.set(type, available - count);
        }
    }

    toArray(): PokeTypes[] {
        const result: PokeTypes[] = [];
        this._energies.forEach((count, type) => {
            for (let i = 0; i < count; i++) {
                result.push(type);
            }
        });
        return result;
    }
}

export default EnergyManager;