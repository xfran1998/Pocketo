import PokeTypes from "../contants/PokeTypes";
import { FixedArray } from "./Utils";

export type MultipleEnergy = Map<PokeTypes, number>;
export type SetEnergy = Set<PokeTypes>// This is a hack to make Set<Energy> work with the size property
export type PokeTurns = FixedArray<PokeTypes, 2>;
