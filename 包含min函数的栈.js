/*
题目描述:
定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
************************************************************************************************************
思路：用一个辅助栈，保存最小值
push进来时，无论如何都会push一个值进minstack，node小就push node，原来的minstack最后一个值小就push原来的最小值，
这样做的好处是pop的时候不需要判断，直接两个栈都pop一下就ok了，minstack上的值都是对应的datastack上的值得最小值
*/

//dataStack为数据栈
//minStack为辅助栈
let dataStack = [];
let minStack = [];
function push(node)
{
    dataStack.push(node);
    let len = minStack.length;
    if(len == 0 || minStack[len - 1]>node){
        minStack.push(node);
    }else{
        minStack.push(minStack[len - 1]);
    }
}
function pop()
{
    if(dataStack.length>0 && minStack.length>0){
        dataStack.pop();
        minStack.pop();
    }else{
        return null;
    }
}
function top()
{
    return dataStack[dataStack.length - 1];
}
function min()
{
    return minStack[minStack.length - 1];
}
