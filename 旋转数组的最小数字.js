/*
题目描述:
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
*/

//不考虑旋转和递增的特性，直接暴力。复杂度O(n)
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length==0){
        return 0;
    }
    let min = rotateArray[0];
    for(i = 1; i< rotateArray.length; i++){
        if(min > rotateArray[i]){
            min = rotateArray[i];
        }
    }
    return min;
}

//考虑递增的特性，旋转之后会出现阶跃,复杂度也是O(n),最好情况是一次就行
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length==0){
        return 0;
    }
    for(i = 0; i< rotateArray.length; i++){
        if(rotateArray[i+1] < rotateArray[i]){
            var min = rotateArray[i+1];
        }
    }
    return min;
}

//考虑递增和旋转特性，使用二分查找，注意条件非递减
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length==0){
        return 0;
    }
    let head = 0;
    let tail = rotateArray.length - 1;
    while((tail - head)>1){
        let mid = Math.floor((head+tail)/2);
        if(rotateArray[mid]-rotateArray[head]>=0){
            head = mid;  //mid元素不小于head元素，mid元素仍位于前面的非减排序子数组
        }
        if(rotateArray[tail]-rotateArray[mid]>=0){
            tail = mid;  //tail元素不小于mid元素，mid元素仍位于后面的非减排序子数组
        }
    }
    return rotateArray[tail]; //最小元素为后面子数组的第一个元素，即tail元素
}
