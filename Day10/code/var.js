// var不足之一：var没有块级作用域

var arr = [];
for(var i = 0; i < 3; i++) {
    arr[i] = function() {
        console.log(i)
    }
}

arr[0](); // 3
arr[1](); // 3
arr[2](); // 3

// let 提供块级作用域

var arr = [];
for(let i = 0; i < 3; i++) {
    arr[i] = function() {
        console.log(i)
    }
}

arr[0](); // 0
arr[1](); // 1
arr[2](); // 2


// var不足之二：用 var 声明变量的时候会出现“变量提升”的现象

var a = 1; // 全局变量

(function(){
    console.log(a) // undefined
    var a = 2;
})();

var a = 1; // 全局变量

(function(){
    // 变量提升现象
    var a; // 先执行声明，这时候的a是一个局部变量
    console.log(a) // undefined
    a = 2; // 后执行定义（赋值）
    // var a = 2;  // 这行代码被拆分成两个部分：声明var a; 和定义 a = 2; 
})();


var a = 1; // 全局变量

(function(){
    console.log(a) // ReferenceError: Cannot access 'a' before initialization
    let a = 2;
})();

// 结果报错！原因：用let声明的变量，在其块级作用域内是封闭的，是不会受外面的全局变量a的影响，并且用let
// 必须要先声明后使用，否则报错！