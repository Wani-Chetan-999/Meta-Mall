function updateDashboardNumbers() {
  fetch('http://localhost:8082/WAD-Practicals/userData.php')  // Ensure correct port & path
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Update dashboard values dynamically
      document.getElementById('totalOrderValue').innerText = data.totalOrder;
      document.getElementById('totalSalesValue').innerText = data.totalSales;
      document.getElementById('totalProfitValue').innerText = data.totalProfit;
      document.getElementById('totalReturnValue').innerText = data.totalReturn;
    })
    .catch(error => console.error('Error updating dashboard:', error));
}

// Refresh dashboard data every 3 seconds
setInterval(updateDashboardNumbers, 3000);

// Sidebar Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".sidebarBtn");
  
  sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };
});