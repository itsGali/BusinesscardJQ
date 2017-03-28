function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	Info();
}

function info() {

	name = 'Adam';
	surname = 'Malysz';
	email = 'adammalysz@onet.pl';
	studyfield = 'Informatyka stosowana';
	
	info =  'Name   		: '    + name + '<br>' + 
			'Surname	    : '     + surname + '<br>' + 
			'Email		 	: '  + email + '<br>' + 
			'Field of Study	: ' + studyfield + '<br>';

	document.getElementById("details").innerHTML = info;	
}

function interests() {

	interests =  'Moje zainteresowania: W wolnym czasie czytam moją ulubioną literaturę. Uwielbiam kryminały, książki przygodowe, fantastyczne, dramaty. Zazwyczaj mocno angażuję się w przeżycia głównych bohaterów. Literatura pochłania wiele mojego czasu, bo po przeczytaniu kilku kartek jestem ciekawa co będzie dalej, jak ta historia się skończy i dlatego zdarza się, że jednego dnia czytam całą książkę.';

	document.getElementById("interests").innerHTML = interests;	
}
