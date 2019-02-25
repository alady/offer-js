/*
题目描述:
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
思路：
斐波那契数列
*/

// 递归
function rectCover(number)
{
    if(number <=2) return number;
    return rectCover(number - 1)+ rectCover(number - 2);
}

//循环
function rectCover(number)
{
    if(number <=2) return number;
    let nOne = 2,nTwo = 1,res;
    for(let i = 3;i<=number;i++){
        res = nOne + nTwo;
        nTwo = nOne;
        nOne = res
    }
    return res;
}
