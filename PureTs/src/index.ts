class User {
  email: string;
  name: string;
  readonly city: string = 'New Delhi';
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

const nirmal = new User('nirmaL@gmail.com', 'Nirmal');
// nirmal.city = 'morena';
