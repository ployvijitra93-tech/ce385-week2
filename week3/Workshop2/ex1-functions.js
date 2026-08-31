// ==========================================
// ส่วนที่ 1 — เขียนฟังก์ชั่น
// ==========================================

// 1. ตรวจสอบคะแนน (Arrow Function)
const isValidScore = (score) => typeof score === 'number' && score >= 0 && score <= 100;

// 2. แปลงคะแนนเป็นเกรด (Arrow Function + array + find ตาม Hint)
const toGrade = (score) => {
  if (!isValidScore(score)) return 'Invalid Score';

  const GRADE_RULES = [
    { min: 80, grade: 'A' },
    { min: 75, grade: 'B+' },
    { min: 70, grade: 'B' },
    { min: 65, grade: 'C+' },
    { min: 60, grade: 'C' },
    { min: 55, grade: 'D+' },
    { min: 50, grade: 'D' },
    { min: 0,  grade: 'F' }
  ];

  const matched = GRADE_RULES.find((rule) => score >= rule.min);
  return matched ? matched.grade : 'F';
};

// 3. คำนวณคะแนน Workshop (มีค่าเริ่มต้น raw, full = 60, weight = 20)
function calculateWorkshopScore(raw, full = 60, weight = 20) {
  return (raw / full) * weight;
}

// 4. คำนวณคะแนนรวม 5 ก้อน
function calculateTotal(workshop, attendance, project, midterm, final) {
  return workshop + attendance + project + midterm + final;
}


// ==========================================
// ส่วนที่ 2 — ทดสอบ สร้างข้อมูลนักศึกษา 3 คน
// ==========================================

const students = [
  { name: 'Alice', workshopRaw: 48, attendance: 10, project: 25, midterm: 18, final: 24 },
  { name: 'Bob',   workshopRaw: 30, attendance: 8,  project: 18, midterm: 12, final: 15 },
  { name: 'Charlie', workshopRaw: 60, attendance: 10, project: 30, midterm: 25, final: 25 }
];

const studentResults = students.map((student) => {
  const workshopScore = calculateWorkshopScore(student.workshopRaw);
  const totalScore = calculateTotal(
    workshopScore,
    student.attendance,
    student.project,
    student.midterm,
    student.final
  );
  
  return {
    Name: student.name,
    Workshop: workshopScore,
    Total: totalScore,
    Grade: toGrade(totalScore)
  };
});

console.log('--- ส่วนที่ 2: แสดงผลข้อมูลนักศึกษา 3 คน ---');
console.table(studentResults);


// ==========================================
// ส่วนที่ 3 — พิสูจน์ค่าเริ่มต้น (Default Parameters)
// ==========================================

console.log('\n--- ส่วนที่ 3: พิสูจน์ค่าเริ่มต้น ---');

const test1 = calculateWorkshopScore(48);
const test2 = calculateWorkshopScore(48, 60, 20);
const test3 = calculateWorkshopScore(48, undefined, 25);

console.log(`calculateWorkshopScore(48)         = ${test1}`);
console.log(`calculateWorkshopScore(48, 60, 20) = ${test2}`);
console.log(`ผลลัพธ์เท่ากันหรือไม่: ${test1 === test2}`);

console.log(`\ncalculateWorkshopScore(48, undefined, 25) = ${test3}`);

/*
 * อธิบายผลลัพธ์ของการส่ง undefined (ตามโจทย์ส่วนที่ 3):
 * การส่ง undefined เข้ามาในตำแหน่งพารามิเตอร์ตัวที่ 2 (full)
 * จะทำให้ JavaScript ดึงค่าเริ่มต้น (Default Parameter) คือ full = 60 มาใช้งานแทน
 * ในขณะที่ weight ถูกเปลี่ยนเป็น 25 ตามค่าที่ส่งเข้าไปใหม่ 
 * สูตรจึงกลายเป็น: (48 / 60) * 25 = 20
 */
