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
  protected _courseCount = 1;

  readonly city: string = 'New Delhi';
  constructor(
    public name: string,
    public email: string // private userId: string
  ) {}

  private deleteToken() {
    console.log('Token Deleted');
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1');
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const nirmal = new User('nirmaL@gmail.com', 'Nirmal');
nirmal.city;
