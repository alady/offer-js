/*
题目描述
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39
*/

//递归实现：逆序计算，面试官不喜欢，牛客网不通过,重复计算太多
function Fibonacci(n)
{
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}


//循环实现：避免重复计算，顺序计算，首先根据f(0)和f(1)计算出f(2),再根据f(1)和f(2)计算f(3).....以此类推算出第n项,时间复杂度为O(n)
function Fibonacci(n)
{
    if(n === 0) return 0;
    if(n === 1) return 1;
    let nOne = 1, nTwo = 0 , result;
    for(i = 2; i <= n; i++){
        result = nOne + nTwo;
        nTwo = nOne;
        nOne = result;
    }
    return result;
}

//
