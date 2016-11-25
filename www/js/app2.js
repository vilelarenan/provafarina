


$(mostrarPerson).ready( function() {
	//var idPer = $('#selecao').val();
 $.ajax({
type: 'GET',
url: 'http://swapi.co/api/people/'//+idPer+'/',
dataType:'json',
data: { get_param: 'value' },
error: function(erro) {
	alert(erro.responseText);
},
success: function(data) {
	var divPerson = document.querySelector("#contPerson");
divPerson.innerHTML = "";
$.each(data.results, function(i, data)) {
divPerson.innerHTML += "Nome: " + data.name + "<br/>Altura:" + data.height + "<br/>Ano Nasc.: " + data.birth_year + "<br/>Genero: " + data.gender + "<br/>";
});
}

});
};
