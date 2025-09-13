// Expense Pie Chart
new Chart(document.getElementById('expenseChart'), {
  type: 'doughnut',
  data: {
    labels: ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'],
    datasets: [{
      data: [500, 200, 350, 150, 100],
      backgroundColor: ['#4facfe','#43e97b','#f093fb','#fbc2eb','#ff9a9e']
    }]
  },
  options: { plugins: { legend: { labels: { color: "#fff" } } } }
});

// Predictive Line Chart
new Chart(document.getElementById('predictiveChart'), {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
    datasets: [{
      label: 'Predicted Spending ($)',
      data: [800,820,850,870,890,920,950],
      fill: true,
      borderColor: '#4facfe',
      backgroundColor: 'rgba(79,172,254,0.2)',
      tension: 0.4
    }]
  },
  options: { plugins: { legend: { labels: { color: "#fff" } } }, scales: { x: { ticks: { color: "#fff" } }, y: { ticks: { color: "#fff" } } } }
});

// Income vs Expenses Bar Chart
new Chart(document.getElementById('incomeChart'), {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
    datasets: [
      { label: 'Income', data: [2000,2200,2100,2300,2500,2400,2600], backgroundColor: '#43e97b' },
      { label: 'Expenses', data: [1500,1600,1700,1650,1800,1750,1850], backgroundColor: '#f093fb' }
    ]
  },
  options: { plugins: { legend: { labels: { color: "#fff" } } }, scales: { x: { ticks: { color: "#fff" } }, y: { ticks: { color: "#fff" } } } }
});

// Background Animation
tsParticles.load("tsparticles", {
  particles: {
    color: { value: "#00f2fe" },
    links: { enable: true, color: "#00f2fe", opacity: 0.3, distance: 120 },
    move: { enable: true, speed: 2 },
    number: { value: 70 },
    size: { value: { min: 1, max: 4 } }
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
