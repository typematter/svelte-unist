import { type TypeGuard } from '@accuser/unist-util-type-guards';
import type { Node } from 'unist';
/**
 * Recursively visit nodes in an Unist AST.
 *
 * @param tree - The root node to start visiting from
 * @param guard - A type guard function to filter nodes
 * @param visitor - A function to call on each visited node
 */
export declare const visit: <T extends Node>(tree: Node, guard: TypeGuard<T>, visitor: (node: T) => void) => void;
