const strVal = "สวัสดี";
const numVal = 100;
const boolVal = true;
let undefVal;
const nullVal = null;
const arrVal = [1, 2, 3];

console.log(`ค่า: ${strVal} | ชนิด: ${typeof strVal}`);
console.log(`ค่า: ${numVal} | ชนิด: ${typeof numVal}`);
console.log(`ค่า: ${boolVal} | ชนิด: ${typeof boolVal}`);
console.log(`ค่า: ${undefVal} | ชนิด: ${typeof undefVal}`);
console.log(`ค่า: ${nullVal} | ชนิด: ${typeof nullVal}`);
console.log(`ค่า: ${arrVal} | ชนิด: ${typeof arrVal}`);

console.log(`typeof null ได้ผลว่า: ${typeof nullVal}`);
console.log(`ตัวแปรไม่กำหนดค่า มีชนิดเป็น: ${typeof undefVal}`);

const nanVal = Number("abc");
console.log(`typeof NaN ได้ผลว่า: ${typeof nanVal}`);

const inputAge = "20";
const inputScore = "85.5";

const agePlusFive = Number(inputAge) + 5;
console.log(`ผลบวก 5: ${agePlusFive}`);

const scoreFixed = Number(inputScore).toFixed(1);
console.log(`ทศนิยม 1 ตำแหน่ง: ${scoreFixed}`);

console.log(`inputAge === 20 ได้ผล: ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 ได้ผล: ${Number(inputAge) === 20}`);
