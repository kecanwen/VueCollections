/* 
实现日期格式化函数
dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日
*/
const dateFormat = function(dateInput,format){
    let year = dateInput.getFullYear();
    let month = dateInput.getMonth() + 1;
    let day = dateInput.getDate();
    format = format.replace(/yyyy/,year).replace(/MM/,month).replace(/dd/, day)
}