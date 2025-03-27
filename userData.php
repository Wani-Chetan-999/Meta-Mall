<?php
header('Content-Type: application/json');

// Simulated dynamic data (replace with database values if needed)
$data = [
    'totalOrder'  => rand(40000, 50000),
    'totalSales'  => rand(35000, 45000),
    'totalProfit' => '$' . rand(10000, 15000),
    'totalReturn' => rand(10000, 12000)
];

echo json_encode($data);
?>
