let score: number | string = 33;

score = 44;
score = '55';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let nirmal: User | Admin = { name: 'Nirmal', id: 334 };

nirmal = { username: 'ns', id: 334 };

// function getDbId(id: number | string) {
//  //make some api
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId('3');

function getDbId(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

// array
const data: number[] = [1, 2, 3, 4];
const data2: string[] = ['1', '2', '3', '4'];
const data3: (string | number | boolean)[] = ['1', '2', '3', 4, false];
const data4: any[] = ['1', '2', '3', 4, false];

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'window';

export {};
