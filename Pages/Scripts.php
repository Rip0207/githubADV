<script src="./Fonctions/jquery.1.7.0.js"></script>
		
<!-- Date Pickers -->
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

<!-- WowBook -->
<script src="./Fonctions/modernizr-2.8.3-respond-1.4.2.min.js"></script>
<script src="./Fonctions/helper.js"></script>		
<script src="./wow_book/wow_book.min.js"></script>
<script>
	$(function(){
		
		$('#book').wowBook( {
			height:600
			,width: 920
			,hardcovers : true
			,scaleToFit: "#Book_Container"
		} ); // create the book

		var book=$.wowBook("#book"); // get book object instance
	})
</script>

<!-- Custom -->		
<script src="./Constantes/Constantes.js"></script>
<script src="./Fonctions/FonctionsJS.js"></script>
<script src="./Fonctions/Delay.js"></script>
<script src="./Design/Placement.js"></script>