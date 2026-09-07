const students = [
  { id: "6501", name: "Somchai", major: "CE", score: 85 },
  { id: "6502", name: "Somsri", major: "CS", score: 72 },
  { id: "6503", name: "Somsak", major: "IT", score: 68 },
  { id: "6504", name: "Sompong", major: "CE", score: 90 }
];

function toGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
}

function fetchStudentByIdAsync(id) {
  return new Promise((resolve, reject) => {
    if (typeof id !== "string" || !id.trim()) {
      return reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
    }

    setTimeout(() => {
      const student = students.find((s) => s.id === id);
      if (!student) {
        return reject(new Error(`ไม่พบรหัสนักศึกษา <${id}>`));
      }
      resolve({ ...student });
    }, 300);
  });
}


console.log("--- ข้อ 2: Promise ---");

fetchStudentByIdAsync("6501")
  .then((student) => {
    
    return { name: student.name, grade: toGrade(student.score) };
  })
  .then((data) => {

    return `รายงาน: คุณ ${data.name} ได้เกรด ${data.grade}`;
  })
  .then((report) => {

    console.log(report);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  })
  .finally(() => {
    console.log("จบการทำงาน fetchStudentByIdAsync");
  });

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  };
}