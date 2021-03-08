
//  Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []
  function traversal(root: TreeNode | null, depth: number | null): void {
    if (root !== null) {
      if (!res[depth]) res[depth] = []
      traversal(root.left, depth + 1)
      res[depth].push(root.val)
      traversal(root.right, depth + 1)
    }
  }
  traversal(root, 0)
  return res
};