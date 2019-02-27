/*
题目：
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
**********************************************************************************************************************************
思路:
1 用一个queue来保存二叉树节点，一个list来保存打印的值
2 每次弹出queue的第一个值，然后把其value放入list，再将其左节点和右节点依次放到queue的最后。如此，每次放入list的都会是最高层从左至右的value值。
**********************************************************************************************************************************
javascript小知识点：
arrayObject.shift()：删除并返回数组第一个元素的值。如果数组已经为空，则 shift() 不改变数组，并返回 undefined 值。
arrayObject.pop()：删除并返回数组的最后一个元素。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
**********************************************************************************************************************************
*/
function PrintFromTopToBottom(root)
{
    let queue = [];//辅助队列
    let list = [];//存放打印的节点
    if(root == null) return list;
    queue.push(root);
    while(queue.length>0){
        let first = queue.shift();
        list.push(first.val);
        if(first.left!=null){
            queue.push(first.left);
        }
        if(first.right!=null){
            queue.push(first.right);
        }
    }
    return list;
}
