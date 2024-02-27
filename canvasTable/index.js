const canvas = document.getElementById('tableCanvas');
const ctx = canvas.getContext('2d');

const numRows = 1000;
const numCols = 1000;

const cellWidth = canvas.width / numRows;
const cellHeight = canvas.height / numRows;

// 1、使用缓存 
const cache = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
         21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
         41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
         61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
         81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

// 2、使用离屏渲染
const offsetScreenCanvas = document.createElement('canvas');


const drawTable = ()=>{
    for (let i = 0; i <= numRows; i++) {
        ctx.moveTo(0, i * cellHeight);
        ctx.lineTo(canvas.width, i * cellHeight);
    }
    for (let i = 0; i <= numCols; i++) {
        ctx.moveTo(i * cellWidth, 0);
        ctx.lineTo(i * cellWidth, canvas.height);
    }
    ctx.stroke();
}

const drawCell = (i,j)=>{
    if(cache.indexOf(i) > -1){
        //缓存里面  直接绘制
        ctx.fillText(`(${i},${j})`, j * cellWidth + 5, i * cellHeight + 15);
    }else{
        // 一些计算
    }
}

const drawContent = ()=>{
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            drawCell(i);
        }
    }
};

const draw = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTable();
    drawContent();
}

draw()

