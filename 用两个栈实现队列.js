/*
题目：用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
*/

//方法一：利用类实现
class Stack{  //定义一个类：栈
    constructor(){
      this.items = [];
    }
    pop(){
      return this.items.pop();
    }
    push(item){
      this.items.push(item);
    }
  }
  let stack1 = new Stack();
  let stack2 = new Stack();
  function push(node)
  {
    stack1.push(node);
  }
  function pop()
  {
    if (stack2.items.length == 0) {
      while (stack1.items.length > 0) {//stack1中有元素，全部放入stack2
        stack2.push(stack1.pop());
      }
    }
    return stack2.pop();
    if (stack1.items.length ==0) {
      while(stack2.length>0){
        stack1.push(stack2.pop());
      }
    }
  }
  
  //方法二：利用构造函数
  function Stack(){ //定义一个类：栈
    var items = [];
    this.push = function(item){
      items.push(item);
    }
    this.pop = function(){
      return items.pop();
    }
    this.isEmpty = function(){
      return items.length == 0;
    }
  }
  var stack1 = new Stack();
  var stack2 = new Stack();
  function push(node)
  {
    stack1.push(node);
  }
  function pop()
  {
    if(stack2.isEmpty()){
      while(!stack1.isEmpty()){
        stack2.push(stack1.pop())
      }
    }
    return stack2.pop();
  }
