function getMenuPrice(menu) {
  switch (menu) {
    case "ต้มยำกุ้ง":
      return 120;
    case "ผัดไทย":
      return 60;
    // รวม 3 เมนูราคา 50 เท่ากันด้วย fall-through
    case "ข้าวมันไก่":
    case "ข้าวหมูแดง":
    case "ข้าวผัด":
      return 50;
    default:
      return 0;
  }
}

function getSizeMultiplier(size) {
  switch (size) {
    case "ธรรมดา":
      return 1;
    case "พิเศษ":
      return 1.5;
    case "จัมโบ้":
      return 2;
    default:
      return 1;
  }
}

const orders = [
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ข้าวมันไก่", size: "ธรรมดา", qty: 1 },
  { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
  { menu: "ข้าวผัด", size: "พิเศษ", qty: 3 },
  { menu: "ชาไทย", size: "ธรรมดา", qty: 2 } // เมนูที่ไม่มีในรายการ (ทดสอบ default)
];

let grandTotal = 0;
for (const item of orders) {
  const basePrice = getMenuPrice(item.menu);
  const multiplier = getSizeMultiplier(item.size);
  const itemTotal = basePrice * multiplier * item.qty;
  grandTotal += itemTotal;
  
  console.log(`${item.menu} (${item.size}) x${item.qty} = ${itemTotal} บาท`);
}
console.log(`ราคารวมทั้งบิล: ${grandTotal} บาท`);