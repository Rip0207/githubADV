<!doctype html>
<html>
	<head>
	<!-- DataHead -->
		<title>Mon Arbre de vie </title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" >
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
			?>
			
			
		</div>
		<div id="Smartphone" class="color_10">
			<div id = "P_-1" class="Planche">
				<div class="Container">

					<h2>Bienvenue sur Mon album de vie</h2>			
					<p>
						Du temps est encore nécessaire pour <br />
						vous offrir le nouvel album de vie.
					</p>
					<img alt="Icone 'en chantier'" src="./Design/Images/Image_01.png" >
					<br>
					<br>
					<a href="action('Auth\AuthController@getLogout)" class="">À très vite</a>
					<br>
					<div id="Paypal">
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick" />
							<input name="hosted_button_id" type="hidden" value="6VXX4T2LPWYLJ" />
							<input alt="PayPal - la solution de paiement en ligne la plus simple et la plus sécurisée !" name="submit" src="https://www.paypalobjects.com/fr_FR/BE/i/btn/btn_donateCC_LG.gif" type="image" />
							<img src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" alt="" width="1" height="1" border="0" />
						</form>
						IBAN BE29 5230 8057 6864 <br>
						BIC TRIOBEBB <br>
					</div>
					
				</div>
			</div>	
					<div id="Footer">			 
						© Mon album de vie, une initiative de la Fondation d'utilité publique La mort fait partie de la vie 2015
					</div>			
		</div>
		<!-- Scripts -->
		<?php
			require_once("./Pages/Scripts.php");
		?>
	</body>
</html>