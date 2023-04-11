interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const nirmal: User = {
  dbId: 23,
  email: 'nirm@gmail.com',
  userId: 2011,
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'nirmal10', off = 10) => {
    return 10;
  },
};
