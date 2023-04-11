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
        this.city = 'New Delhi';
    }
}
const nirmal = new User('nirmaL@gmail.com', 'Nirmal');
nirmal.city;
