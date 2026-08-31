// ดึงฟังก์ชันแปลงเกรดจากข้อ 1 มาช่วยใน countByGrade
const toGrade = (score) => {
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  if (score >= 50) return 'D';
  return 'F';
};

// ข้อมูลตั้งต้นสำหรับทดสอบ (ชุดเดียวกับข้อ 2)
const students = [
  { id: '1001', name: 'Alice', major: 'CE', score: 85 },
  { id: '1002', name: 'Bob', major: 'IT', score: 42 },
  { id: '1003', name: 'Charlie', major: 'CE', score: 78 },
  { id: '1004', name: 'David', major: 'IT', score: 65 },
  { id: '1005', name: 'Eve', major: 'CE', score: 49 },
  { id: '1006', name: 'Frank', major: 'IT', score: 92 }
];


// ==========================================
// ส่วนที่ 1 — ฟังก์ชั่นสรุปผลการเรียน (ห้ามใช้ loop)
// ==========================================

// 1. ดึงชื่อทุกคน
const getNames = (students) => students.map((s) => s.name);

// 2. คนที่คะแนน >= 50
const getPassedStudents = (students) => students.filter((s) => s.score >= 50);

// 3. ผลรวมคะแนนทั้งหมด
const getTotalScore = (students) => students.reduce((sum, s) => sum + s.score, 0);

// 4. คะแนนเฉลี่ย (ทศนิยม 2 ตำแหน่ง, array ว่าง คืน 0)
const getAverageScore = (students) => {
  if (students.length === 0) return 0;
  const total = getTotalScore(students);
  return Number((total / students.length).toFixed(2));
};

// 5. นับจำนวนแยกตามเกรด
const countByGrade = (students) => {
  return students.reduce((acc, student) => {
    const grade = toGrade(student.score);
    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
  }, {});
};

// 6. นักศึกษาที่คะแนนสูงสุด (ใช้ reduce)
const getTopStudent = (students) => {
  if (students.length === 0) return undefined;
  return students.reduce((top, current) => (current.score > top.score ? current : top), students[0]);
};


// ==========================================
// ส่วนที่ 2 — ท่อข้อมูลต่อกัน (Method Chaining ในบรรทัดเดียว)
// ==========================================

// หาคะแนนเฉลี่ยของนักศึกษาสาขา CE ที่สอบผ่าน (filter -> map -> reduce)
const cePassedAvg = ((cePassedScores) => cePassedScores.length === 0 ? 0 : Number((cePassedScores.reduce((sum, s) => sum + s, 0) / cePassedScores.length).toFixed(2)))(students.filter((s) => s.major === 'CE' && s.score >= 50).map((s) => s.score));


// ==========================================
// แสดงผลการทดสอบ
// ==========================================

console.log('--- ส่วนที่ 1: ทดสอบกับข้อมูลปกติ ---');
console.log('getNames:', getNames(students));
console.log('getPassedStudents:', getPassedStudents(students));
console.log('getTotalScore:', getTotalScore(students));
console.log('getAverageScore:', getAverageScore(students));
console.log('countByGrade:', countByGrade(students));
console.log('getTopStudent:', getTopStudent(students));

console.log('\n--- ส่วนที่ 2: คะแนนเฉลี่ย CE ที่สอบผ่าน (Chaining) ---');
console.log('CE Passed Average:', cePassedAvg);

console.log('\n--- ส่วนที่ 3: ทดสอบกรณีขอบ (Edge Case: Array ว่าง []) ---');
const emptyArray = [];
console.log('getNames([]):', getNames(emptyArray));
console.log('getPassedStudents([]):', getPassedStudents(emptyArray));
console.log('getTotalScore([]):', getTotalScore(emptyArray));
console.log('getAverageScore([]):', getAverageScore(emptyArray)); // ต้องได้ 0 ไม่ใช่ NaN
console.log('countByGrade([]):', countByGrade(emptyArray));
console.log('getTopStudent([]):', getTopStudent(emptyArray));