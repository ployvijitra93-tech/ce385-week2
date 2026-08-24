function login(inputUser, inputPass, role, isActive, age) {
  const CORRECT_USER = "admin";
  const CORRECT_PASS = "ce385pass";

  if (inputUser !== CORRECT_USER || inputPass !== CORRECT_PASS) {
    return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
  
  if (isActive === false) {
    return "บัญชีนี้ถูกระงับการใช้งาน";
  }
  
  if (age < 18) {
    return "อายุไม่ถึงเกณฑ์";
  }
  
  if (role === "อาจารย์") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
  }
  if (role === "นักศึกษา") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
  }

  return "สิทธิ์การใช้งานไม่ถูกต้อง";
}
console.log("กรณี 1 (สำเร็จ อาจารย์):", login("admin", "ce385pass", "อาจารย์", true, 30));
console.log("กรณี 2 (สำเร็จ นักศึกษา):", login("admin", "ce385pass", "นักศึกษา", true, 20));
console.log("กรณี 3 (รหัสผ่านผิด):", login("admin", "wrongpass", "นักศึกษา", true, 20));
console.log("กรณี 4 (ชื่อผู้ใช้ผิด):", login("user", "ce385pass", "นักศึกษา", true, 20));
console.log("กรณี 5 (บัญชีถูกระงับ):", login("admin", "ce385pass", "นักศึกษา", false, 20));
console.log("กรณี 6 (อายุไม่ถึง):", login("admin", "ce385pass", "นักศึกษา", true, 16));
