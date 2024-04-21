# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getLonelyNodes(self, root: Optional[TreeNode]) -> List[int]:
        answer = []
        def search(par,node):
            cnt = 0
            if par.left:
                cnt+=1
            if par.right:
                cnt+=1
            if cnt==1 and par != node:
                answer.append(node.val)
            if(node.left):
                search(node,node.left)
            if(node.right):
                search(node, node.right)
        search(root,root)
        return answer