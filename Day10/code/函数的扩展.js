// 求所有参数的和

// 传统的方式

function sum() {
    let result = 0;
    let length = arguments.length;
    for(let i = 0; i < length; i++){
        result += arguments[i];
    }
    return result
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));

// 新的方式：剩余参数（rest参数）

// 注意：rest 参数必须是函数的最后一个参数，后面不能再跟其它参数。


function sum2(x, y, ...values) {
    // console.log(values)
    let result = 0;
    values.forEach(function(value, index){
        result += value
    })
    return result
}

console.log(sum2(1, 2, 3, 4, 5, 6))


// 扩展运算符：一般结合数组使用，把数组的元素用逗号分隔开，组成一个序列。

function sum3(x, y, z) {
    return x + y + z;
}

let arr = [1, 2, 3];

console.log(sum3(...arr)); // sum3(...arr) -> sum3(...[1, 2, 3]) ->  sum3(1, 2, 3) -> 6

// 传统方式定义函数

// 方式一

function he1(x, y) {
    return x + y;
}

console.log(he1(1, 2));

// 方式二

let he2 = function(x, y) {
    return x + y;
}

console.log(he2(1, 2));

// 新的方式：箭头函数

let he3 = (x, y) => {
    return x + y;
}

console.log(he3(1, 2));


let Person1 = {
    name: '张三',
    age: 18,
    say(){
        setInterval(function(){
            console.log(this) // this指向谁？
        }, 1000)
    }
}

Person1.say();