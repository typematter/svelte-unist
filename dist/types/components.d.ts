import type { Component } from 'svelte';
import type { Node } from 'unist';
export type Components<T extends Node = Node> = {
    [K in T['type']]: Component<Extract<T, {
        type: K;
    }>>;
};
