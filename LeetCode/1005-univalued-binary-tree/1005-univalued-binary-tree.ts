/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isUnivalTree(root: TreeNode | null): boolean {
    if (!root) return true;

    const targetValue = root.val;

    const check = (node: TreeNode | null) => {
        if (!node) return true;
        if (node.val !== targetValue) return false;

        return check(node.left) && check(node.right);
    }

    return check(root);
};