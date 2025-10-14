import type { TypeGuard } from '@accuser/unist-util-type-guards';
import type { Node } from 'unist';
import { visit } from './visit.js';

/**
 * Collect all nodes in an Unist AST that match a given type guard.
 *
 * @param tree - The root node to start collecting from
 * @param guard - A type guard function to filter nodes
 * @returns An array of nodes that match the type guard
 */
export const collect = <T extends Node>(tree: Node, guard: TypeGuard<T>) => {
	const nodes: T[] = [];

	visit(tree, guard, (node) => void nodes.push(node));

	return nodes;
};
