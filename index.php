<!doctype html>
<html>
	<head>
	<!-- DataHead -->
		<title>Mon Arbre de vie </title>
				
		<link rel="stylesheet" href="./Design/classic.css">
		<link rel="stylesheet" href="./Design/classic.date.css">

		<link rel="stylesheet" type="text/css" href="./Design/Placement.css">
		<link rel="stylesheet" type="text/css" href="./Design/Color.css">
		<link rel="stylesheet" type="text/css" href="./Design/Animation.css">
	</head>
	<body>
		<!-- Conteneur principale -->
		<div id = "Principal">
		
			<!-- Planche par ordre décroissant pour un empilement logique -->
			<!-- Page 7 -->
			<div id = "P_7" class="color_04 Planche Last" >
				<div class="Container">
					<form id="Inscription" method="POST" action="#" class="Center" >
						<fieldset>
							<ul>
								<li><input name="Nom" type="text" placeholder="Nom" class="" /></li>
								<li><input name="Prenom" type="text" placeholder="Prenom" class="" /></li>
								<li><input name="Email" type="text" placeholder="Email" class="" /></li>
								<li> <input
									id="input_01"
									class="datepicker"
									name="date"
									type="text"
									autofocuss
									value="14 August, 2014"
									data-valuee="2014-08-08" /></li>
								<li><input name="Password" type="password" placeholder="Mot de passe" class="" /></li>
								<li><input name="VerifPassword" type="password" placeholder="Verification du mot de passe" class="" /></li>
								<br />
								<li><input name="Submit" type="submit" value="M'enregistrer" class="" /></li>
							</ul>
						</fieldset>		
					</form>
					<div class="Logo">
					</div>
					<div class="Preview color_04" >
					</div>
				</div>
			</div>
			<!-- Page 6 -->
			<div id = "P_6" class="color_02 Planche" >
						<div class="Container">
						P6
					<div class="Logo">
					</div>
					<div class="Preview color_02" >
					</div>
				</div>
			</div>			
			<!-- Page 5 -->
			<div id = "P_5" class="color_04 Planche" >
						<div class="Container">
						P5
					<div class="Logo">
					</div>
					<div class="Preview color_04" >
					</div>
				</div>
			</div>
			<!-- Page 4 -->
			<div id = "P_4" class="color_01 Planche" >
						<div class="Container">
						P4
					<div class="Logo">
					</div>
					<div class="Preview color_01" >
					</div>
				</div>
			</div>
			<!-- Page 3 -->
			<div id = "P_3" class="color_02 Planche" >
						<div class="Container">
						P3
					<div class="Logo">
					</div>
					<div class="Preview color_02" >
					</div>
				</div>
			</div>
			<!-- Page 2 -->
			<div id = "P_2" class="color_03 Planche" >
				<div class="Container">
						<div class="Logo">
						</div>
						<div class="Preview color_01" >
						P2 -> Preview
					</div>
				</div>				
			</div>
			<!-- Page 1 -->
			<div id = "P_1" class="color_05 Planche" >
				<div class="Container">
					<form id="Connexion" method="POST" action="#" class="Center" >
						<fieldset>
						<ul>
							<li><input name="Login" type="text" placeholder="Nom d'utilisateur" class="" /></li>
							<li><input name="Password" type="password" placeholder="Mot de passe" class="" /></li>
							<br />
							<li><input name="Submit" type="submit" value="Me connecter" class="" /></li>
							<li><input name="ForgetPassword" type="button" value="Mot de passe oublié" class="Disabled" /></li>
						</ul>
						</fieldset>		
					</form>
					<div class="Logo">
					</div>
				</div>
			</div>
			
			<div id="Boutons">
				<form method="POST" action="#">
					<fieldset>
					<ul>
						<li><input name="ToLog" type="button" value="Se connecter" class="" /></li>
						<li><input name="ToSub" type="button" value="S'enregistrer" class="" /></li>
					</ul>
					</fieldset>		
				</form>
			</div>
			<div id="P_Boutons" class="CenterY" >
				<form method="POST" action="#">
					<fieldset>
					
					</fieldset>		
				</form>
			</div>
			<div id="container">
			</div>
		</div>
		
		<!-- Scripts -->
		<script src="./Fonctions/jquery.1.7.0.js"></script>
		<script src="./Fonctions/picker.js"></script>
		<script src="./Fonctions/picker.date.js"></script>

		<script type="text/javascript">

		$('.datepicker').pickadate({
            monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
			container: '#container',
            today: '',
            clear: '',
            close: '',
            selectMonths: true,
            selectYears: 150,
            format: 'dd-mm-yyyy',
        });
		</script>
		
		<script src="./Constantes/Constantes.js"></script>
		<script src="./Fonctions/FonctionsJS.js"></script>
		<script src="./Fonctions/Delay.js"></script>
		<script src="./Design/Placement.js"></script>
	</body>
</html>