/* 
写一段会造成内存溢出的程序
*/
function recursiveFunc() {
    recursiveFunc();
  }
  
recursiveFunc();
  