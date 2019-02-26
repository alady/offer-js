/*题目描述:
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
*/
//旋转方式
function printMatrix(matrix)
{
    if(matrix == null){
        return null
    }
    else{
        let output = [];
        let firstOne = matrix.shift();
        output.push(firstOne);
        while(matrix.length){
            matrix = rotateMatrix(matrix);
            let shift = matrix.shift();
            output = output.concat(shift);
        }
        return output
    }
}
function rotateMatrix(matrix){
    if(matrix[0].length == undefined){
        return matrix
    }
    else{
        let rows = matrix.length;
        let cols = matrix[0].length;
        let newMatrix = [];
        for(let j = cols - 1; j>= 0; j--){
            let tempMatrix = [];
            for(let i = 0; i < rows; i++){
                tempMatrix = tempMatrix.concat(matrix[i][j])
            }
            newMatrix.push(tempMatrix)
        }
        return newMatrix
    }
}
//牛客网没通过
function printMatrix(matrix)
  {
    let row = matrix.length;
    let col = matrix[0].length;
    if(matrix == null || row<=0 || col<=0) return;
    let start = 0;
    let result = [];
    while(row > 2*start && col >2*start){
      printCore(matrix, start, row, col, result);
      start++;
    }
    return result;
  }
  function printCore(matrix, start, row, col,result){
    let endY = row - start - 1;
    let endX = col -start - 1;
    for(let i = start; i<=endX; i++){
      result.push(matrix[start][i]);
    }
    if(endY > start){
      for(let i = start + 1; i<= endY; i++){
        result.push(matrix[i][endX]);
      }
    }
    if(endY > start && endX > start){
      for(let i = endX - 1; i >= start; i--){
        result.push(matrix[endY][i]);
      }
    }
    if(endY - start > 1 && endX > start){
      for(let i = endY - 1; i > start; i--){
        result.push(matrix[i][start]);
      }
    }
  }
