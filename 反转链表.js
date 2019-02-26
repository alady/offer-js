/*
题目描述:
输入一个链表，反转链表后，输出新链表的表头。
pNode为当前结点，pre为当前结点的前一个结点，next为当前结点的下一个结点；
需要完成的目标是将pre-->pNode-->next1-->next2-->··· ···-->end反转为pre<--pNode<--next1<--next2<--··· ···<--end；
pre结点可以用来反转方向，为了避免反转之后链表断开，用next结点暂时保存next1结点；
先用next保存pHead的下一个结点信息，保证单链表不会断裂；
保存之后，让pHead从指向next变成指向pre；
到此，完成了pre到pHead的反转，即pre<--pHead;
将pre，pHead，next依次向后移动一个结点。
循环操作，直到pNode为null，此时pre就是链表的最后一个结点，链表反转完毕，pre为反转后链表的第一个结点。
输出pre就是反转之后所得的链表。

作者：echoVic
链接：https://www.jianshu.com/p/8daef395977d
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
*/


function ReverseList(pHead)
{
    let pointNode = pHead;
    let pointPre = null;
    let pointNext = null;
    while(pointNode){
        pointNext = pointNode.next;  //储存下一结点
        pointNode.next = pointPre;  //改变链表方向
        pointPre = pointNode;
        pointNode = pointNext;
    }
    return pointPre;
}
