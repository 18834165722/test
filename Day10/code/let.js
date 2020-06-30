// 同一块级作用域内，不允许重复声明同一变量

(function(){
    let a=1;
    // let a = 2; // 报错！
    console.log(a);
})();

(function(){
    let a = 2;
    console.log(a);
})();

(function(){
    let a; // a只是声明，但是没有赋值
    console.log(a);  // undefined
    a = 3; // 此时只是重新赋值，而不是重新声明
    console.log(a);
})();

// 函数内不能用let 重新声明函数变量

function test(str){
    // let str = "aaabbb" // 报错！不允许重复声明同一变量
    console.log(str)
}

test('bbbaaa')