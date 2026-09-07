const wait = (ms, value, willFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => (willFail ? reject(new Error(`${value} ล้มเหลว`)) : resolve(value)),
      ms
    );
  });

function timeoutPromise(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), ms);
  });
}

async function main() {
 
  console.log("--- สถานการณ์ 1 ---");
  try {
    const res1 = await Promise.all([
      wait(300, "โปรไฟล์"),
      wait(400, "ตารางเรียน"),
      wait(500, "ประกาศ")
    ]);
    console.log("เปิดหน้าแรก:", res1.join(" + "));
  } catch (err) {
    console.log("หน้าแรกเปิดไม่ได้:", err.message);
  }

  try {
    await Promise.all([
      wait(300, "โปรไฟล์"),
      wait(400, "ตารางเรียน"),
      wait(500, "ประกาศ", true) // willFail = true
    ]);
  } catch (err) {
    console.log("หน้าแรกเปิดไม่ได้:", err.message);
  }

  console.log("\n--- สถานการณ์ 2 ---");
  const res2 = await Promise.allSettled([
    wait(300, "อีเมล"),
    wait(500, "SMS", true),
    wait(400, "แอป")
  ]);
  res2.forEach((item, index) => {
    const channel = ["อีเมล", "SMS", "แอป"][index];
    if (item.status === "fulfilled") {
      console.log(`ช่องทาง ${channel}: สำเร็จ (${item.value})`);
    } else {
      console.log(`ช่องทาง ${channel}: ล้มเหลว (${item.reason.message})`);
    }
  });

  console.log("\n--- สถานการณ์ 3 ---");
  try {
    const res3 = await Promise.any([
      wait(300, "mirror-A", true),
      wait(600, "mirror-B")
    ]);
    console.log("ใช้ข้อมูลจาก:", res3);
  } catch (err) {
    console.log("ทุก mirror ล้มเหลวทั้งหมด");
  }

  console.log("\n--- สถานการณ์ 4 ---");
  try {
    const res4 = await Promise.race([
      wait(1200, "ฐานข้อมูล"),
      timeoutPromise(800)
    ]);
    console.log("ได้ข้อมูลจาก:", res4);
  } catch (err) {
    console.log("เกิน 800ms -> เลิกรอ -> ใช้แคชเก่าแทน");
  }
}

main();