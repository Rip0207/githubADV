<!doctype html>
<html>
	<head>
	<!-- DataHead -->
		<title>Mon Arbre de vie </title>
				
		<link rel="stylesheet" href="./Design/classic.css" >
		<link rel="stylesheet" href="./Design/classic.date.css" >

		<link rel="stylesheet" href="./wow_book/wow_book.css" type="text/css" >
		
		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" >
		<link rel="stylesheet" type="text/css" href="./Design/Placement.css">
		<link rel="stylesheet" type="text/css" href="./Design/Color.css">
		<link rel="stylesheet" type="text/css" href="./Design/Animation.css">
	</head>
	<body>
		<!-- Conteneur principale -->
		<div id = "Principal">
			
			<!-- Spinner -->
			<?php
			
				require_once("./Pages/Spinner.php");
			?>
			
			<!-- Planche par ordre décroissant pour un empilement logique -->
			<!-- Page 6 -->
			<?php
				require_once("./Pages/P6.php");
			?>
			<!-- Page 5 -->
			<?php
				require_once("./Pages/P5.php");
			?>
			<!-- Page 4 -->
			<?php
				require_once("./Pages/P4.php");
			?>
			<!-- Page 3 -->
			<?php
				require_once("./Pages/P3.php");
			?>
			<!-- Page 2 -->
			<?php
				require_once("./Pages/P2.php");
			?>
			<!-- Page 1 -->
			<?php
				require_once("./Pages/P1.php");
			?>
			<!-- Interfaces -->
			<?php
				require_once("./Pages/Interfaces.php");
				
				/*require_once("./Pages/P0.php");*/
			?>
			
			
		</div>
		
		<!-- Scripts -->
		<?php
			require_once("./Pages/Scripts.php");
		?>
	</body>
</html>