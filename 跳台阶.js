/*
题目描述:
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
思路:
就是一个斐波那契数列，f(n) = f(n-1) + f(n-2)
当n>2时，第一次跳的时候有两种不同的选择：
第一次跳跃可以是1级，此时跳法数目为剩下的n-1级台阶的跳法数目，f(n-2)
         可以是2级, 此时跳法数目为剩下的n-2级台阶的跳法数目，f(n-2)
*/
function jumpFloor(number)
{
    if(number == 0) return 0;
    if(number == 1) return 1;  //1个台阶时，为1
    if(number == 2) return 2;  //两个台阶时，为2
    let nOne = 2,nTwo = 1,result;
    for(let n = 3; n<=number; n++){
        result = nOne + nTwo;
        nTwo = nOne;
        nOne = result;
    }
    return result;
}
