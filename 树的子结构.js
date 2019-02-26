/*
题目描述:
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
思路：
1 有关二叉树的算法问题，一般都可以通过递归来解决。那么写成一个正确的递归程序，首先一定要分析正确递归结束的条件。
2 如果根节点相同则递归调用isSubtree（），如果根节点不相同，则判断root1的左子树和root2是否相同，再判断右子树和tree2是否相同;
3 注意null的条件，HasSubTree中，如果两棵树都不为空才进行判断，isSubtree中，如果root2为空，则说明第二棵树遍历完了，即匹配成功;
4 root1为空有两种情况：（1）如果root1为空&&root2不为空说明不匹配，（2）如果root1为空，root2为空，说明匹配。
*/

function isSubtree(root1, root2) {    //树结构是否完全相同
    if (root2 == null) return true;
    if (root1 == null) return false;
    if (root1.val == root2.val) {
        return isSubtree(root1.left, root2.left) &&
            isSubtree(root1.right, root2.right);
    } else {
        return false;   
    }
}
 
function HasSubtree(pRoot1, pRoot2)  //找到相等的根节点
{
   if (pRoot1 == null || pRoot2 == null) {
       return false;
   }
    return isSubtree(pRoot1, pRoot2) ||
        HasSubtree(pRoot1.left, pRoot2) ||
        HasSubtree(pRoot1.right, pRoot2);
}
