<?php 
	require_once('scripts/functions.php');
	
	if (isset($_GET["process"])) {
		$data = get_single_process($conn, $_GET["process"]);
		echo json_encode($data);
	}
	else {
		$data = get_all_process($conn);
		echo json_encode($data);
	}
?>