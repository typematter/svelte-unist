export interface ComponentMap {}

export type AllComponents = ComponentMap[keyof ComponentMap];

export type Components<T extends import('unist').Node = AllComponents> = {
	[K in T['type']]: import('svelte').Component<Extract<T, { type: K }>> | undefined;
};

export interface Context {
	components: Components;
}

export interface Props {
	components?: Partial<Components>;
}
