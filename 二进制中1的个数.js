/*
题目描述:
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
*/
//利用位运算，直接操作二进制
function NumberOf1(n)
{    //通过左移比较的值，避免因为负数进入死循环
    let count = 0;
    let flag = 1;
    while(flag){
        if(n&flag){
            count++;
        }
        flag = flag<<1;
    }
    return count;
}

//把一个整数减去1之后，再和原来的整数做位与运算，得到的结果相当于把整数的二进制表示中最右边的1变成0
function numberOfOne(n) {
    let count = 0;
    while(n !== 0) {
        ++count;
        //把所有的1转成0，数字也就变成0
        n = (n - 1) & n;
    }
    return count;
}
