$(document).ready( function() {
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/people/',
		dataType: 'json',
		data: { get_param: 'value' },
		error: function (erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPersonagem = document.querySelector("#divPersonagem");
			divPersonagem.innerHTML = "";
			$.each(data.results, function(i, obj) {
				divPersonagem.innerHTML += '<a href="javascript:PersonList(\'' + obj.url + '\')" >' + obj.name + '</a> <br />';
			})
		}
	})
})

//---------------------------------------------##------------------------------------------------------
function PersonList(BringPerson) {
	$.ajax({
		type: 'GET',
		url: BringPerson,
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPersonagem = document.querySelector("#divMostrarInfo");
			divPersonagem.innerHTML = "";
			divPersonagem.innerHTML += "Nome: " + data.name + 
			                       "<br/>Altura:" + data.height + 
			                       "<br/>Ano Nasc.: " + data.birth_year +
								   "<br/>Genero: " + data.gender + 
								   "<br/>";
	}});
}