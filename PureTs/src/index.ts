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
  readonly city: string = 'New Delhi';
  constructor(
    public name: string,
    public email: string // private userId: string
  ) {}
}

const nirmal = new User('nirmaL@gmail.com', 'Nirmal');
nirmal.city;
