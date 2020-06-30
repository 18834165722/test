const HOST = "192.168.100.1"

console.log(HOST)

// 不可更改

// HOST = "192.168.100.2" // 报错！因为尝试重新修改一个常量的值

// 只在块级作用域起作用

{
    const BLOCKSIZE = 50;
    console.log(BLOCKSIZE);
}

// 不存在变量提升，必须先声明后使用
// console.log(BLOCKSIZE);  // 报错！const也存在块级作用域和不存在变量提升现象，这一点跟let一样

// 不可重复声明同一个常量

{
    const PASSWORD = "123456"
    // const PASSWORD = "654321" // 报错！
}

// 声明后必须同时赋值

{
    // const USERNAME; // 报错！常量必须声明的时候就需要赋值
    const USERNAME = "admin"
}

// 如果常量是一个对象呢？

// 不可修改的是对象在内存中的地址，而不是对象本身。

{
    const Person = {name: "张三"};
    console.log(Person.name);
    Person.age = 18;
    Person.name = "李四";
    console.log(Person);

    //Person = {} // 出错！尝试重新修改常量Person的值为空对象
}