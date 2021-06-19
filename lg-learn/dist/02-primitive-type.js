"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    var a = 123;
})();
var a = 123;
var a1 = 'sad';
var a2 = 11;
var a3 = false;
var e4 = undefined;
var e5 = Symbol();
Array;
Promise;
var error = '1000';
// Object类型(除了原始的类型)
var foo = function a() { };
var obj = { foo: 12 };
// 数组
var arr1 = [1, 2];
var arr2 = [1, 2];
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (total, current) { return total + current; }, 0);
}
sum(1, 3);
// 元数组类型
var tuple = [12, '1'];
// 枚举类型
var PostStatus1 = {
    Draft: 0
};
// 函数类型
function func1(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return 'f';
}
var func2 = function (a) {
    return 'func2';
};
// 任意类型
function stringify(value) {
    return JSON.stringify(value);
}
// 隐式推断
var age = 10;
//age = 's'
//类型断言 编译过程中
var num = [100, 120, 130];
var res1 = num.find(function (i) { return i > 0; });
//const square = res1 * res1
var num1 = res1;
var num2 = res1; //JSX 可能会语法冲突
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
//# sourceMappingURL=02-primitive-type.js.map