function toGrade(score) {
  if (score < 0 || score > 100) {
    return "คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100";
  }
  if (score >= 80) { return "A"; }
  if (score >= 75) { return "B+"; }
  if (score >= 70) { return "B"; }
  if (score >= 65) { return "C+"; }
  if (score >= 60) { return "C"; }
  if (score >= 55) { return "D+"; }
  if (score >= 50) { return "D"; }
  return "F";
}

console.log(`คะแนน 78 -> เกรด ${toGrade(78)}`);

const testScores = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];
for (const score of testScores) {
  console.log(`คะแนน ${score} -> ${toGrade(score)}`);
}