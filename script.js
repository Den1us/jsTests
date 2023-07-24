let und;
console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj["name"]);

let arr = ["plum.png", "orange.jpg", "apple.bmp"];
console.log(arr[1 ]);
arr[10] = '4444';

const arr1 = [1, 2, 3];
const arrObj = {
    a: 'a',
    '1': 'b',
    2: 3,
    abc: {
        def: {}
    }
}
const d = 'd';
arrObj.b = '1234';
arrObj['c'] = '4321';
arrObj[d] = '43221';

console.log(arr1[1]);
console.log(arrObj.a);
console.log(arrObj['b']);
console.log(arrObj.b);
console.log(arrObj.c);
console.log(arrObj.d);
console.log(arr);

// const obj1 = {a:1, b:2};
const obj1 = {
    'Anna': 500,
    'Alice':800
};