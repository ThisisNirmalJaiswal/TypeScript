var score = 33;
score = 44;
score = '55';
var nirmal = { name: 'Nirmal', id: 334 };
nirmal = { username: 'ns', id: 334 };
// function getDbId(id: number | string) {
//  //make some api
//   console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId('3');
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3, 4];
var data2 = ['1', '2', '3', '4'];
var data3 = ['1', '2', '3', 4, false];
var data4 = ['1', '2', '3', 4, false];
var seatAllotment;
seatAllotment = 'window';
