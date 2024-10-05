import type { Component } from 'svelte';
import type { Node } from 'unist';

export type Components<T extends Node> = {
	[K in T['type']]: Component<Extract<T, { type: K }>> | undefined;
};
