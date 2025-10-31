// === STATISTIK GRAFIK ===
if (document.getElementById("bullyingChart")) {
  const ctx = document.getElementById("bullyingChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      datasets: [{
        label: "Kasus Bullying",
        data: [320, 410, 390, 450, 480, 520],
        backgroundColor: [
          "#FFD966", "#F4B183", "#E06666", "#FF9E80", "#FFD966", "#C13F3F"
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Data Kasus Bullying di Indonesia (6 Tahun Terakhir)",
          font: { size: 16, weight: "bold" }
        }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

// === KUIS ===
function checkQuiz() {
  const answer = document.querySelector('select[name="q1"]').value;
  const result = document.getElementById("quizResult");

  if (answer === "") {
    result.textContent = "❗Silakan pilih jawaban terlebih dahulu.";
    result.style.color = "#E06666";
  } else if (answer === "b") {
    result.textContent = "✅ Benar! Bullying adalah tindakan menyakiti fisik atau mental seseorang.";
    result.style.color = "#3C9D9B";
  } else {
    result.textContent = "❌ Salah. Coba pelajari kembali di halaman Edukasi.";
    result.style.color = "#E06666";
  }
}
