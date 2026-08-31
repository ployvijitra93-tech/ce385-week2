// ==========================================
// ส่วนที่ 1 — สร้างข้อมูลตั้งต้น (Array of Object 6 คน)
// ==========================================

const initialStudents = [
  { id: '1001', name: 'Alice', major: 'CE', score: 85, contact: { email: 'alice@ce.com', phone: '0812345678' } },
  { id: '1002', name: 'Bob', major: 'IT', score: 42, contact: { email: 'bob@it.com', phone: '0823456789' } },
  { id: '1003', name: 'Charlie', major: 'CE', score: 78, contact: { email: 'charlie@ce.com', phone: '0834567890' } },
  { id: '1004', name: 'David', major: 'IT', score: 65, contact: { email: 'david@it.com', phone: '0845678901' } },
  { id: '1005', name: 'Eve', major: 'CE', score: 49, contact: { email: 'eve@ce.com', phone: '0856789012' } },
  { id: '1006', name: 'Frank', major: 'IT', score: 92, contact: { email: 'frank@it.com', phone: '0867890123' } }
];


// ==========================================
// ส่วนที่ 2 — เขียนฟังก์ชั่นค้นหา (ไม่แก้ไข array ต้นฉบับ)
// ==========================================

// 1. ค้นหาตาม ID (คืน student object หรือ undefined)
const findById = (students, id) => {
  return students.find((s) => s.id === id);
};

// 2. ค้นหาตามสาขา (คืน array ใหม่)
const findByMajor = (students, major) => {
  return students.filter((s) => s.major === major);
};

// 3. ตรวจสอบว่ามีคนตกหรือไม่ (คะแนน < 50)
const hasFailingStudent = (students) => {
  return students.some((s) => s.score < 50);
};

// 4. ดึงอีเมล โดยใช้ Optional Chaining (?.) และ Nullish Coalescing (??)
const getEmail = (students, id) => {
  const student = findById(students, id);
  return student?.contact?.email ?? 'ไม่พบข้อมูลติดต่อ';
};


// ==========================================
// ส่วนที่ 3 — ทดสอบกรณีหาไม่เจอ และการเพิ่มนักศึกษา
// ==========================================

console.log('--- ทดสอบฟังก์ชันค้นหาทั่วไป ---');
console.log('นักศึกษาสาขา CE:', findByMajor(initialStudents, 'CE'));
console.log('มีนักศึกษาที่คะแนนต่ำกว่า 50 หรือไม่?:', hasFailingStudent(initialStudents));

console.log('\n--- ทดสอบกรณีหาไม่เจอ (ID "9999") ---');
console.log('findById("9999"):', findById(initialStudents, '9999'));
console.log('getEmail("9999"):', getEmail(initialStudents, '9999'));

console.log('\n--- ทดสอบเพิ่มนักศึกษาที่ไม่มี contact (ห้ามใช้ push ใช้ spread แทน) ---');
const newStudent = { id: '1007', name: 'Grace', major: 'IT', score: 88 };

// สร้าง array ใหม่ด้วย Spread Operator แทนการใช้ push
const updatedStudents = [...initialStudents, newStudent];

console.log('จำนวนนักศึกษาใน array ใหม่:', updatedStudents.length);
console.log('getEmail ของคนใหม่ที่ไม่มี contact (ID "1007"):', getEmail(updatedStudents, '1007'));