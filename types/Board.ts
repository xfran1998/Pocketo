import GameManager from "../GameManager";
import Pokemon from "../Pokemon";
import { FixedArray } from "./Utils";

export type BenchRow = FixedArray<Pokemon | null, typeof GameManager.BENCH_SIZE>;
export type BenchRows = FixedArray<BenchRow, 2>;