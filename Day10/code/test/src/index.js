let hello ="hello es6!"
const PI = 3.14
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        return '我叫${this.name},今年${this.age}岁。'
    }
}

let p1 = new Person('张三',18)
console.log(p1.say())
console.log(hello,PI)