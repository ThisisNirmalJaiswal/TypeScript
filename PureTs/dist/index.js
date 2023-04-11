"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = 'New Delhi';
//   constructor(name: string, email: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// another way to define a class
class User {
    constructor(name, email // private userId: string
    ) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = 'New Delhi';
    }
    deleteToken() {
        console.log('Token Deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
const nirmal = new User('nirmaL@gmail.com', 'Nirmal');
nirmal.city;
