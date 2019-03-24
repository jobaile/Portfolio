<?php 
	require_once('scripts/functions.php');
	
	if (isset($_GET['portfolio'])) {
		$data = get_single_work($conn, $_GET['portfolio']);
		echo json_encode($data);
	}
	else {
		$data = get_all_work($conn);
		echo json_encode($data);
	}
?>