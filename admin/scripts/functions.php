<?php
function get_single_work($pdo, $portfolio) {
    include('connect.php');
    $query = "SELECT * FROM tbl_portfolio WHERE p_id = '$portfolio'";
  
    $get_work = $pdo->query($query);
    $results = array();
  
    while($row = $get_work->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }
    return $results;
  }
  
  function get_all_work($pdo) {
    include('connect.php');
    $query = "SELECT * FROM tbl_portfolio";
  
    $get_work = $pdo->query($query);
    $results = array();
  
    while($row = $get_work->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }
  
    return $results;
  }