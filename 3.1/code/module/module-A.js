// 模块A

let title = "Es6模块化"
let desc = "一个JS中缺失已久的新特性"
let hello = () => {
    console.log('Hello ES6模块化！')

}

// 导出

// 默认导出——default，这是常用的使用方式


export default {
    title,
    desc,
    hello
}