/*
题目描述：
给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
思路：
此题需注意考虑全面，指数为0或负数的情况、指数为负数时底数为0的情况（此时相当于求0的倒数）
*/

//全面但不够高效的算法
function Power(base, exponent)
{
    if(base==0&&exponent<0) return false;//底数为0，指数为负数时，报错！
    if(exponent == 0) return 1;//指数为0时
    let res = 1;
    expabs = abs(exponent);
    for(let i = 1; i <= expabs; i++){
        res *= base;
    }
    if(exponent<0) return 1/res;  //指数为负数，返回结果的倒数
    if(exponent>0) return res;  //指数为正数
}
let abs = (exponent) =>{  //定义绝对值函数
        if(exponent>0)return exponent;
        if(exponent<0)return -exponent;
    }
//即全面又高效的算法，利用求a的n次方的公式，参考剑指offer-P112
function Power(base, exponent)
{
    if(base==0&&exponent<0) return false;//底数为0，指数为负数时，报错！
    if(exponent == 0) return 1;//指数为0时
    let res = pow(base, abs(exponent));
    if(exponent > 0) return res;
    if(exponent < 0) return 1/res;
}
let abs = (exponent) =>{  //定义绝对值函数
        if(exponent>0)return exponent;
        if(exponent<0)return -exponent;
    }
let pow = (base, exponent) =>{  //定义幂函数
        if(exponent == 1) return base;//指数为1时
        let res = Power(base, Math.floor(exponent/2)); //递归
        res *= res;
        if(exponent%2 == 1){
            res *= base;
        }
        return res;
    }
//继续细节改进:位运算的效率比乘除法及求余运算符高很多
function Power(base, exponent)
{
    if(base==0&&exponent<0) return false;//底数为0，指数为负数时，报错！
    if(exponent == 0) return 1;//指数为0时
    let res = pow(base, abs(exponent));
    if(exponent > 0) return res;
    if(exponent < 0) return 1/res;
}
let abs = (exponent) =>{  //定义绝对值函数
        if(exponent>0)return exponent;
        if(exponent<0)return -exponent;
    }
let pow = (base, exponent) =>{  //定义幂函数
        if(exponent == 1) return base;//
        let res = Power(base, exponent>>1); //右移运算符替代除以2
        res *= res;
        if(exponent&1 == 1){  //位与运算符替代求余运算符
            res *= base;
        }
        return res;
    }
