import type { Component } from 'svelte';
import type { Node } from 'unist';
import type { Nodes } from './nodes.js';
export type Components<T extends Node = Nodes> = {
    [K in T['type']]: Component<Extract<T, {
        type: K;
    }>> | undefined;
};
