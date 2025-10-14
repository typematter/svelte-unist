import type { TypeGuard } from '@accuser/unist-util-type-guards';
import type { Node } from 'unist';
/**
 * Collect all nodes in an Unist AST that match a given type guard.
 *
 * @param tree - The root node to start collecting from
 * @param guard - A type guard function to filter nodes
 * @returns An array of nodes that match the type guard
 */
export declare const collect: <T extends Node>(tree: Node, guard: TypeGuard<T>) => T[];
