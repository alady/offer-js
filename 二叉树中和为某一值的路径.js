/*
****************************************************************************************
题目描述:
输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
(注意: 在返回值的list中，数组长度大的数组靠前)
****************************************************************************************
思路:
1 前序遍历二叉树，每次更新当前路径的和Sum；
2 判断当前结点是否是叶子结点，以及Sum是否等于expectNumber。如果是，把当前路径保存在res结果中；
3 若不符合条件，则弹出此结点。
*****************************************************************************************
*/
function FindPath(root, expectNumber) {
	let res = [];
	if(root == null) return res;
	Find(root, expectNumber, res, 0, []);
	return res;
}

function Find(root, expectNumber, res, sum, path) {
	path.push(root.val);
	sum = sum + root.val;
	if(sum == expectNumber && root.right == null && root.left == null) {
		res.push(path.slice(0));
	}
    if(root.left !== null) {
		Find(root.left, expectNumber, res, sum, path);
	}
	if(root.right !== null) {
		Find(root.right, expectNumber, res, sum, path);
	}
	path.pop();
}
