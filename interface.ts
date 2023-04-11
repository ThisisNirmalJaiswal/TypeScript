interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner';
}

const nirmal: Admin = {
  dbId: 23,
  email: 'nirm@gmail.com',
  role: 'admin',
  userId: 2011,
  githubToken: 'github',
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'nirmal10', off = 10) => {
    return 10;
  },
};

export {};
