<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Atividade Chat</title>
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css" />
	<meta charset="UTF-8"/>
	<script type="text/javascript" src="AtividadeChat.js" ></script>
	
</head>
<body>
	<span><center><b>CHAT</b></span>
<div class="container text-left">
	<table class="table" id=''>
	<br />
	<br />
	<input type="texto" class="form-control" id="txtNome" placeholder="Nome" />
	<br />
	<br />
	<input type="texto" class="form-control" id="txtMensagem" placeholder="Mensagem" />
	</table>
	<button class="btn btn-primary" id="btEnviar">Enviar</button>
</div>
<div class="">
	<h6>Bate Papo:</h6>
<table  id="tabela"></table>
</div>


</body>
</html>

var cor1= '#00BFFF';
var cor2= '#9400D3';
var cor3= '#000080';
var coratual= cor1;
var chat=[];
var r;


function montarTabela(lista,idElemento){
		var html = '';
		for (var x=0; x < lista.length; x++){;
		html += '<tr>';
			html += '<td><span style="color:' + lista[x][2]+'"> ' + lista[x][0] + ' diz: </span>'+ lista[x][1];
		html += '</td></tr>';
		}
	document.getElementById(idElemento).innerHTML = html;
}
function adicionar(lista,Nome,Mensagem,cor){
	lista.push([Nome,Mensagem,cor]);	
}

function verficar(Nome, lista){
	var resultado= false;
	for (r=0; r < lista.length; r++){
		
		if (Nome == lista[r][0]){
			resultado = true;
			break;
		}else {
			resultado= false;
		}
	}
	return resultado;
}

document.addEventListener('DOMContentLoaded', function(){	
	document.addEventListener('click', function(evento){
		
		var elemento = evento.target || eevento.SRCElement;
		var idElemento = elemento.id;
		
		  switch(idElemento){
			  case'btEnviar' :		
				var novoNome= document.getElementById('txtNome').value;
				var Mensagem= document.getElementById('txtMensagem').value;
				
				 if(coratual==cor1){
					 coratual=cor2;
					  //alert (coratual)
				 }else if (coratual==cor2){
					 coratual=cor3;
					  //alert(coratual)
				 }else{
					 coratual = cor1;
					  //alert (coratual)
				 }
				 if(verficar(novoNome, chat)== true ){			  
					adicionar(chat, novoNome, Mensagem, chat[r][2]);
				 }else{
					adicionar(chat, novoNome, Mensagem, coratual);
				 }
				 
				 //alert(verficar(novoNome, chat));
				//alert (coratual);
				document.getElementById('txtNome').value ='';
				document.getElementById('txtMensagem').value ='';		
				montarTabela(chat, 'tabela');
				break;
		  }
				
	 });
});
