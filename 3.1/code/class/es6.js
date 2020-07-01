// class 类：本质上也是基于原型prototype和构造函数的实现方式做了进一步封装。

// 声明一个Person人类

class Person{
    // 构造方法
    constructor(name, age){
        // 属性
        this.name = name
        this.age = age
    }

    // 普通方法（实例方法）
    say() {
        return `我叫${this.name}，我今年${this.age}岁。`
    }

    // 静态方法 static
    static friend(p1, p2) {
        return `${p1.name}和${p2.name}是好朋友！`
    }

}

// 分别实例化张三和李四两个对象

let p1 = new Person('张三', 18);

let p2 = new Person('李四', 28);

// 调用实例方法，实例方法属于实例对象

console.log(p1.say());

console.log(p2.say());

// 调用静态方法，由于静态方法属于类的，不属于实例对象，应该通过类名直接调用

console.log(Person.friend(p1, p2));

// 继承

// 定义一个学生类Student来继承父类Person

class Student extends Person{
    // 构造方法
    constructor(name, age, school) {
        // 子类必须在 constructor 方法中调用 super 方法；
        // 必须先调用 super 方法，才可以使用 this ，否则报错。

        // 通过super方法继承父类所有的属性
        super(name, age);

        // 子类可以拥有属性自己的属性
        this.school = school;
    }

    // 子类还可以拥有属性自己的方法

    study() {
        return `${this.name}正在${this.school}读书。`;
    }

    // 如果子类和父类的方法同名了，那么子类的这个方法会覆盖父类的方法，有需要才这样做！
    say() {
        return `我叫${this.name}，今年${this.age}岁，我正在${this.school}读书。`;
    }
}

// 实例化一个学生类对象

let s1 = new Student('王五', 38, '中北大学');

console.log(s1.say());

console.log(s1.study());