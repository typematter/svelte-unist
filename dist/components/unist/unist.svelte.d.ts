export interface ComponentMap {
}
export type Components<T extends import('unist').Node = ComponentMap[keyof ComponentMap]> = {
    [K in T['type']]?: import('svelte').Component<{
        node: Extract<T, {
            type: K;
        }>;
    }>;
};
export interface UnistContext {
    components: Components;
}
type $$ComponentProps = {
    ast: import('unist').Node;
    components?: Partial<Components>;
};
declare const Unist: import("svelte").Component<$$ComponentProps, {}, "">;
type Unist = ReturnType<typeof Unist>;
export default Unist;
