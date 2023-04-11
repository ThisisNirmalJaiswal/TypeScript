// Types:-
/**
 * Number
 * String
 * Boolean
 * Null
 * Object
 * Array
 * Tuples
 * ...
 * Any
 * Never
 * unknown
 */

// Number:- number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number

let myNum: Number = 42;
console.log(myNum);

// String :- string represents string values like "Hello, world"

let myName: string = 'Nirmal Jasval';
console.log(myName);

// Boolean:- boolean is for the two values true and false

let myBool: boolean = true;

// Arrays:- To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we cover generics.

let arr: number[] = [1, 2, 3];
// arr[0] = 'nirmal' (Error:- String is not assignable to a number type array)
console.log(arr);

// any:- TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

let arr1: any = [1, 2, 3, 4];
arr1[0] = 'nirmal'; // it doesn't show any error bcuz its type of any. we can insert and update any value
console.log(arr1);

// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed
// // you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = 'hello';
// const n: number = obj;
// console.log(obj);
