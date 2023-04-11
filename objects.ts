// const User = {
//   name: 'nirmal',
//   email: 'nirmal@gmail.com',
//   isActive: true,
// };

// function createUser({ name: String, isPaid: boolean }) {}

// let newUser = {
//   name: 'Nirmal',
//   isPaid: false,
//   email: 'nirmal@gmail.com',
// };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: 'Typescript', price: 250 };
// }

// type alias
// type User = {
//   name: String;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: '', email: '', isActive: false };
// }
// createUser({ name: '', email: '', isActive: false });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: '134',
  name: 'nirmal',
  email: 'nirmal@gmail.com',
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
myUser.email = 'nirmal2@gmail.com';
// myUser._id = '135'

export {};
