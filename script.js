// Variabel global
let interval;

// Fungsi untuk memulai countdown
function startCountdown() {
  const dateInput = document.getElementById("targetDate").value;
  const timeInput = document.getElementById("targetTime").value;

  if (!dateInput || !timeInput) {
    alert("Please select both date and time!");
    return;
  }

  const targetDateTime = new Date(`${dateInput}T${timeInput}`).getTime();

  if (isNaN(targetDateTime)) {
    alert("Invalid date or time. Please try again!");
    return;
  }

  clearInterval(interval); // Hentikan countdown sebelumnya

  const countdownMessage = document.getElementById("countdownMessage");
  countdownMessage.textContent = ""; // Bersihkan pesan selesai jika ada

  interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDateTime - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    } else {
      clearInterval(interval);
      countdownMessage.textContent = "Countdown Complete!";
    }
  }, 1000);
}

// Fungsi untuk mereset form dan countdown
function resetForm() {
  document.getElementById("countdownForm").reset(); // Reset form
  clearInterval(interval); // Hentikan countdown

  // Reset nilai tampilan countdown ke nilai awal
  document.getElementById("days").textContent = 0;
  document.getElementById("hours").textContent = 0;
  document.getElementById("minutes").textContent = 0;
  document.getElementById("seconds").textContent = 0;

  // Bersihkan pesan selesai jika ada
  const countdownMessage = document.getElementById("countdownMessage");
  countdownMessage.textContent = "";
}

// Event listener untuk tombol
document.getElementById("startButton").addEventListener("click", startCountdown);
document.getElementById("resetButton").addEventListener("click", resetForm);
