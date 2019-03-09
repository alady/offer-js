/*
***************************************************************************************************
题目描述
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
***************************************************************************************************
*/
/*
思路一:
递归思想：把大问题转换为若干小问题。
将复杂链表分为头结点和剩余结点两部分，剩余部分采用递归方法。
*/

function Clone(pHead)
{
    if(pHead == null){
        return null
    }
    //复制头节点
    let node = new RandomListNode(pHead.label);
    node.random = pHead.random;
    //递归剩余节点
    node.next = Clone(pHead.next);
    return node;
}

function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}
/*思路二
1 在旧链表中，复制每一个结点，并将复制的结点插入该结点后面。
2 遍历链表，初始化复制结点的random指向。
3 将链表拆分为原链表和复制所得链表。
*/

function Clone(pHead) {
    if (pHead === null) return;

    // 对应思路二中的第一步：
    let currNode = pHead;
    while(currNode!==null){
        let cloneNode = new RandomListNode(currNode.label);
        cloneNode.next = currNode.next;
        currNode.next = cloneNode;
        currNode = cloneNode.next;
    }

    // 对应思路二中的第二步：
    currNode = pHead;
    while(currNode!==null && currNode.next!==null){
        if(currNode.random){
            currNode.next.random = currNode.random.next;
        }
        currNode = currNode.next.next;
    }

    //拆分，对应思路二中的第三步：        
    let cloneHead = pHead.next;
    currNode = pHead.next;
    while(currNode.next){
        currNode.next = currNode.next.next;
        currNode = currNode.next;
    }
    return cloneHead;
}
