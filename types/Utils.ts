export type FixedArray<T, N extends number> = T[] & { readonly length: N };
