# CE385 - Programming Workshop

**นักศึกษา:** [วิจิตรา คล้ายธนารักษ์]  
**รหัสนักศึกษา:** 67112381 
---

## 💻 อธิบายการทำงานของโค้ด (Code Documentation)

### Week 2 & 3: JS Basics & Collections
- **`week2/`**: รวมพื้นฐานภาษา JavaScript เช่น การประกาศตัวแปร (`const`, `let`), การตรวจสอบชนิดข้อมูล (`typeof`), การใช้โครงสร้างเงื่อนไข (`if-else`, `switch-case`) และการเขียนฟังก์ชันคำนวณพื้นฐาน
- **`week3/`**: เน้นการประมวลผลข้อมูลชุด (Array) ด้วย Collection Methods เช่น `.map()` สำหรับแปลงข้อมูล, `.filter()` สำหรับคัดกรองข้อมูลตามเงื่อนไข และ `.reduce()` สำหรับการสะสมค่า

---

### Week 4: Asynchronous Programming (เจาะลึก)

#### 1. `ex1-callback.js` (Callback Functions)
- **การทำงาน:** จำลองการดึงข้อมูลนักศึกษาแบบ Asynchronous ด้วย `setTimeout`
- **จุดสำคัญ:** ใช้รูปแบบ **Error-First Callback** `(err, result)` เพื่อส่งต่อความผิดพลาดหากหาข้อมูลไม่พบ หรือส่งผลลัพธ์กลับเมื่อทำงานสำเร็จ

#### 2. `ex2-promise.js` (Promises)
- **การทำงาน:** เปลี่ยนการทำงานจาก Callback มาใช้ `Promise` Object
- **จุดสำคัญ:** มีการคืนค่า `resolve(data)` เมื่อสำเร็จ และ `reject(error)` เมื่อเกิดข้อผิดพลาด รองรับการต่อสายการทำงานด้วย `.then()` และจับข้อผิดพลาดด้วย `.catch()`

#### 3. `ex3-async-await.js` (Async / Await)
- **การทำงาน:** นำ `async` และ `await` มาครอบ Promise เพื่อให้เขียนโค้ด Asynchronous ได้ในรูปแบบที่อ่านง่ายเหมือน Synchronous
- **จุดสำคัญ:** ใช้โครงสร้าง `try...catch` ในการดักจับข้อผิดพลาดแทนการใช้ `.catch()`

#### 4. `ex4-combinators.js` (Promise Combinators)
- **การทำงาน:** บริหารการทำงานของ Promise หลายตัวพร้อมกัน
- **จุดสำคัญ:** ทดสอบใช้งาน `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, และ `Promise.any()` เพื่อจัดการกรณีที่ต้องการรอผลลัพธ์พร้อมกัน หรือต้องการผลลัพธ์จากตัวที่ทำงานเร็วที่สุด