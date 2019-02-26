/*
题目描述:
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
*/
//采用递归
function Merge(pHead1, pHead2)
{
    if(pHead1 == null && pHead2 == null)return null;  //链表1和链表2都为空时，返回null;
    if(pHead1 == null) return pHead2;  //链表1为空时，直接返回链表2
    if(pHead2 == null) return pHead1;  //链表2为空时，直接返回链表1
    let head = null;
    if(pHead1.val<=pHead2.val){
        head = pHead1;
        head.next = Merge(pHead1.next,pHead2); //将头结点与后面的节点链接起来，继续合并剩余结点
    }else{
        head = pHead2;
        head.next = Merge(pHead1,pHead2.next);
    }
    return head;
}
