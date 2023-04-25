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

	desenhaGrafico(imc);
}

function desenhaGrafico(imc) {
	var grafico = document.getElementById("grafico");
	var pincel = grafico.getContext("2d");

	pincel.font = "12px Arial";
	pincel.fillText("Menor que 18,5", 5, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(0, 0, 100, 30);
}

var botao = document.getElementById("botao");
botao.addEventListener("click", calculaImc);