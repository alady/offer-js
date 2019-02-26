/*
题目描述:
输入一个链表，输出该链表中倒数第k个结点。
*/

//遍历两遍链表
function FindKthToTail(head, k)
{
    if(head == null || k == 0) return null;
    let count = 0;
    let p = head;
    let p1 = head;
    while(p){
        count++;
        p = p.next;
    }
    if(k > count) return null;
    for(let i = 1; i< count - k + 1; i++){
        p1 = p1.next;
    }
    return p1;
}
/*
通用思路：
当我们用一个指针遍历链表不能解决问题的时候，可以尝试用两个指针来遍历链表，都是从头节点出发。
可以让其中一个指针遍历的速度快一些（比如一次走两步，找中间节点时），或者让它现在链表上走若干步。
*/
//只遍历一次链表，用两个指针，他们之间的距离相差k-1
//尾指针先走k-1步，到第k步，两个指针一起走。当尾指针达到链表尾节点时，头指针的位置就是倒数第k个
function FindKthToTail(head, k)
{
    if(head == null || k == 0) return null;
    let count = 0;
    let p1 = head;
    let p2 = head;
    for(let i = 0 ; i < k-1; i++){
        if(p1.next){
            p1 = p1.next;
        }else{
            return null;
        }
    }
    while(p1.next){
        p2 = p2.next;
        p1 = p1.next;
    }
    return p2;
}
