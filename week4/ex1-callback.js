const students = [
  { id: "6501", name: "Somchai", major: "CE", score: 85 },
  { id: "6502", name: "Somsri", major: "CS", score: 72 },
  { id: "6503", name: "Somsak", major: "IT", score: 68 },
  { id: "6504", name: "Sompong", major: "CE", score: 90 }
];

function fetchStudentById(id, callback) {
  if (typeof id !== "string" || !id.trim()) {
    return callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
  }

  setTimeout(() => {
    const student = students.find((s) => s.id === id);
    if (!student) {
      return callback(new Error(`ไม่พบรหัสนักศึกษา <${id}>`));
    }
    return callback(null, { ...student });
  }, 300);
}

console.log("--- ข้อ 1: Callback ---");

fetchStudentById("6501", (err, student) => {
  if (err) return console.error("ก Error:", err.message);
  console.log("ก Found:", student);
});

fetchStudentById("9999", (err, student) => {
  if (err) return console.error("ข Error:", err.message);
  console.log("ข Found:", student);
});

fetchStudentById(42, (err, student) => {
  if (err) return console.error("ค Error:", err.message);
  console.log("ค Found:", student);
});

