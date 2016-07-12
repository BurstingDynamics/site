<?php require_once("includes\\common_code\\functions.php"); ?>
<?php
//Variables
	$current_page = "home";
?>
<?php start_html_head_with_title("Bursting Dynamics"); ?>
<?php meta_tags($current_page) ?>
<link href="stylesheet/mainstyle.css" rel="stylesheet" type="text/css">
</head>
<body>
	<?php include("includes\layouts\main_header.php") ?>
    <div id="attract_box_overlay" > 
    	<h1 id="attract_head"> Hello there</h1><br/>
    	<p id="attract_para"> This is data dfshjasdlkfhiopuarnlkjdsfnlkjkiasdfui  </p>
    <?php 	include("includes\layouts\side-popup.php") ?>
    </div>
	<div id = "attract" >
    	<img src = "images\front_page\slider\0.jpg" id = "attract0">
        <img src = "images\front_page\slider\1.jpg" id = "attract1">
	</div>
	<div style="background-color: rgba(255,255,255,0); height: 20px; width: 102%; margin-left:-15px; margin-top: -20px; position: relative; z-index:2">
			<div style="background-color: rgba(255,20,20,0.97); width:25%; height: 20px; float:left;"></div>
			<div style="background-color: rgba(20,255,20,0.97); width:25%; height: 20px;float:left;"></div>
			<div style="background-color: rgba(20,20,255,0.97); width:25%; height: 20px;float:left;"></div>
			<div style="background-color: rgba(255,158,0,0.97); width:25%; height: 20px;float:left;"></div> 
	</div>
	<div id = "mainbodycontents" >
		<h3 style="color:#fff"> Our Delicacies just for you </h3>
		<br/>
		<table border="0" align="center" width = "80%" height="400px">
			<tr>
				<td width="35%"><div style="position:absolute; z-index:1; background-image:url('images/tt_bg.jpg'); height:400px"></div>
				<div id="computer_machines_header">Computers</div>
				</td>
				<td width="65%"> 
						<div style="background-color: rgb(255,0,0)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(170,0,0)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(170,0,0)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(255,0,0)" class = "main_page_articles"> </div>
				</td>
			</tr>
		</table><br/>
		<table border="0" align="center" width = "80%" height="400px">
			<tr>
				<td width="65%">
						<div style="background-color: rgb(0,0,255)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(0,0,170)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(0,0,170)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(0,0,255)" class = "main_page_articles"> </div>
				</td>
				<td width="35%"><div id="science_header" >Science</div> </td>
			</tr>
		</table><br/>
		<table border="0" align="center" width = "80%" height="400px">
			<tr>
				<td width="35%"><div id="outlook_header" >Outlook</div> </td>
				<td width="65%">
						<div style="background-color: rgb(0,255,0)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(0,170,0)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(0,170,0)" class = "main_page_articles"> </div>
						<div style="background-color: rgb(0,255,0)" class = "main_page_articles"> </div>
				</td>
			</tr>
		</table>
		<div id = "attractemails" >
			<table border="0" align="center" width="80%">
			<tr>
				<td width="0.6%">
						<img src="images\signup_tricolor.jpg" height="300px" width="10px" \>
				</td>
				<td width="0.6%">		
				</td>
				<td width="98.8%"> 
					<h4 style="color:#fff">You might be losing on valuable updates! Mind signing up? </h4>
					<p> Ranging from smallest of the computer chips to the biggest of the galaxies, from the hidden histories of religous texts to the history of our very existence, we keep you  updated with facts that will blow your mind. We would like to reach out to you. Take a small step to connect with us. </p>
					<form>
						<input type="text" name="first_name" value="First Name" />
						<input type="text" name="last_name" value="Last Name"/>
						<input type="text" name="email_id" value="Email ID"/>
						<input type="submit" name="submit" value="Sign Up"/>
					</form>
				</td>
			</tr>
		</table>
		</div>
		<div id="authors">
			<h3>Know us </h3>
			<table border="0" align="center" width="80%">
				<tr>
					<td>
					<div style="background-color: rgb(0,255,255); float:left" class = "author_display"> Supragya Raj </div>
					<div style="background-color: rgba(255,255,255,0); float:right" class = "author_display"> </div> <!-- Inexistent -->
					<div style="background-color: rgba(255,255,255,0); float:left" class = "author_display"> </div> <!-- Inexistent -->
					<div style="background-color: rgb(255,0,0); float:right" class = "author_display"> Ashrene </div>
					<div style="background-color: rgb(255,0,255); float:left" class = "author_display"> Ankur Shah</div>
					<div style="background-color: rgba(255,255,255,0); float:right" class = "author_display"> </div> <!-- Inexistent -->
					<div style="background-color: rgba(255,255,255,0); float:left" class = "author_display"> </div> <!-- Inexistent -->
					<div style="background-color: rgb(0,0,255); float:right" class = "author_display"> Prateek Singh </div>
					<div style="background-color: rgb(45,25,255); float:left" class = "author_display"> Shrey </div>
					<div style="background-color: rgba(255,255,255,0); float:right" class = "author_display"> </div> <!-- Inexistent -->
					</td>
				</tr>
			</table>
		</div>
		<?php include("includes\layouts\main_footer.php") ?>
	</div>
	</div>
 <script type="text/javascript" src="javascript/frontpage_javascript.js" ></script>
</body>
</html>