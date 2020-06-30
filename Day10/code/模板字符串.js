let {name, age, sex} = {name: '张三', age: 18, sex: '男'}

// 我叫张三，我是男的，我今天18岁。

// 传统字符串拼接 + 

let sInfo = "我叫" + name + "，我是" + sex+ "的，我今天" + age + "岁。"

console.log(sInfo)

// es6方式：模板字符串 `${}`

let sInfo2 = `我叫${name}，我是${sex}的，我今天${age}岁。`

console.log(sInfo2)

// ${}中可以是运算表达式

let [a, b] = [1, 2]
console.log(`a + b = ${a} + ${b} =  ${a + b}`)

// ${}中可以是函数的调用

function sum(x, y) {
    return x + y;
}

console.log(`1 + 2 = ${sum(1, 2)}`)


// ${}中可以是对象的属性

let o = {a: 1, b: 2};
console.log(`a + b = ${o.a} + ${o.b} =  ${o.a + o.b}`)
