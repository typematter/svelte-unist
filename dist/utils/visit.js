import { isParent } from '@accuser/unist-util-type-guards';
/**
 * Recursively visit nodes in an Unist AST.
 *
 * @param tree - The root node to start visiting from
 * @param guard - A type guard function to filter nodes
 * @param visitor - A function to call on each visited node
 */
export const visit = (tree, guard, visitor) => {
    if (guard(tree)) {
        visitor(tree);
    }
    if (isParent(tree)) {
        for (const child of tree.children) {
            visit(child, guard, visitor);
        }
    }
};
