const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculating angular positions in degrees
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
  const hourDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);

  // Apply rotations to CSS
  secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Run immediately on load, then loop every second
setInterval(updateClock, 1000);
updateClock();


// ฟังก์ชันสร้างขีดรอบหน้าปัดนาฬิกา
function createClockTicks() {
  const ticksContainer = document.getElementById('clock-ticks');
  
  for (let i = 0; i < 60; i++) {
    const tick = document.createElement('div');
    tick.classList.add('tick');
    
    // คำนวณองศา: 1 ขีดเท่ากับ 6 องศา (360 / 60)
    const degrees = i * 6;
    tick.style.transform = `rotate(${degrees}deg)`;
    
    // ทุกๆ 5 ขีดจะเป็นขีดใหญ่ (ตรงกับชั่วโมงพอดี)
    if (i % 5 === 0) {
      tick.classList.add('hour-tick');
    } else {
      tick.classList.add('minute-tick');
    }
    
    ticksContainer.appendChild(tick);
  }
}

// เรียกใช้งานฟังก์ชันสร้างขีดทันทีที่โหลดสคริปต์
createClockTicks();


// --- โค้ดส่วน updateClock() เดิมของคุณอยู่ตรงนี้ สามารถคงไว้ได้เลยครับ ---
