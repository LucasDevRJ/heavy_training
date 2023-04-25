function calculaImc() {
	var campoNome = document.getElementById("nome");
	var campoIdade = document.getElementById("idade");
	var campoPeso = document.getElementById("peso");
	var campoAltura = document.getElementById("altura");

	var nome = campoNome.value;
	var idade = campoIdade.value;
	var peso = campoPeso.value;
	var altura = campoAltura.value;

	idade = parseInt(idade);
	peso = parseFloat(peso);
	altura = parseFloat(altura);

	var imc = peso / (altura * altura);
}

var botao = document.getElementById("botao");
botao.addEventListener("click", calculaImc);