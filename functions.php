<?php 
//Function defintion

function start_html_head_with_title($title){
	echo "<!doctype html>
		<html>
		<head>
		<meta charset=\"utf-8\">
		<title>";
	echo $title;
	echo " </title>\n";
}

function meta_tags($page){
	
}

function add_debug_comment($comment){
	echo "<p style=\" padding-top: 90px; font-size:30px; color:#ffffff;\">";
	echo $comment;
	echo "</p>";
}
?>