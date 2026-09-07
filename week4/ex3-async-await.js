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

async function reportSequential() {
  const ids = ["6501", "6502", "6503"];
  const start = Date.now();

  for (const id of ids) {
    const student = await fetchStudentByIdAsync(id);
    console.log(`[Seq] ${student.name} (${toGrade(student.score)})`);
  }

  const timeUsed = Date.now() - start;
  console.log(`reportSequential ใช้เวลา: ${timeUsed} ms`);
  return timeUsed;
}

async function reportParallel(seqTime) {
  const ids = ["6501", "6502", "6503"];
  const start = Date.now();

  const results = await Promise.all(
    ids.map((id) => fetchStudentByIdAsync(id))
  );

  results.forEach((s) => console.log(`[Par] ${s.name} (${toGrade(s.score)})`));

  const timeUsed = Date.now() - start;
  console.log(`reportParallel ใช้เวลา: ${timeUsed} ms`);
  console.log(`เร็วขึ้นประมาณ ${(seqTime / timeUsed).toFixed(2)} เท่า`);
}

async function safeReport(id) {
  try {
    const student = await fetchStudentByIdAsync(id);
    console.log(`พบข้อมูล: ${student.name} (เกรด ${toGrade(student.score)})`);
  } catch (error) {
    console.log(`ตรวจไม่พบ: <${error.message}>`);
  } finally {
    console.log(`-- จบการตรวจสอบ ${id} --`);
  }
}

async function main() {
  console.log("=== ส่วนที่ 1 & 2 ===");
  const seqTime = await reportSequential();
  await reportParallel(seqTime);

  console.log("\n=== ส่วนที่ 3 ===");
  await safeReport("6501");
  await safeReport("9999");
}

main();
