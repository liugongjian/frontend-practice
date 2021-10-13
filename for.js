// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }
// let i;
// for(i=0;i<5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },1000);
//     }
// var i;
// for(i=0;i<5;i++){
//     let j = i;
//         setTimeout(function(){
//             console.log(j);
//         },1000);
// }
// console.log('j:',j);

// function f(){
//     var i = 1;
// }

// function g(){
//     console.log(i);
// }

// console.log(i);//也访问不到

// f();
// g();//访问不到

//也就是说var不会跳出当前作用域（函数）的作用范围而for中的var原本就是
//位于全局作用域

// for(var i =0; i<5; i++){
//     console.log(i)
// }//等价于
// var i;
// for(i=0; i < 5 ; i++){
//     console.log(i)
// }//let 不会变量提升，因此，使用let 相当于在for{}中声明了5次 let i；


const rows = 4;
const columns = 5;
let toward = true;

const init = r => {
    let matrix = []
    for(let i=0; i<r; i++){
        matrix.push([]);
    }
    return matrix;
}

const fill1col = (matrix, nowCol, startValue) => {
    if(toward){
        for(let r=0; r < rows; r++){
            matrix[r][nowCol] = startValue + r;
        }
    }else{
        for(let r=rows-1,j=0; r > -1; r--,j++){
            matrix[r][nowCol] = startValue + j;
        }
    }
}

let mtx = init(rows);


const fillAll = () => {

    for(let i = 0; i<columns;i++){
        fill1col(mtx, i, 4*i+1);
        toward = !toward;
    }
    console.log(mtx);
}

fillAll();