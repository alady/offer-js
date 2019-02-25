/*
题目描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
思路：举例假设一共4个台阶
如果第一次跳1个台阶，剩下的台阶跳法数目为f(3);
如果第一次跳2个台阶，剩下的台阶跳法数目为f(2);
如果第一次跳3个台阶，剩下的台阶跳法数目为f(1);
如果第一次跳4个台阶，结束;
因此f(4)=f(3)+f(2)+f(1)+1=f(3)*2=f(2)*2*2=2*2*2

*/
//数学归纳法：f(n)为2的（n-1）次幂

//循环实现幂的累加
function jumpFloorII(number)
{
    if(number == 0)return 0;
    if(number == 1)return 1;
    let res = 1;
    for(let i = 1;i<number;i++){
        res *= 2;
    }
    return res;
}
//Math方法
function jumpFloorII(number)
{
    return Math.pow(2,number-1);
}
