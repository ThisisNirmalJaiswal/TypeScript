const square: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};
