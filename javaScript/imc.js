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

	pincel.fillStyle = "black";
	pincel.font = "12px Arial";
	pincel.fillText("Menor que 18,5", 5, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(0, 0, 100, 30);

	pincel.fillStyle = "black";
	pincel.fillText("18,5 a 24,9", 120, 50);
	pincel.fillStyle = "green";
	pincel.fillRect(100, 0, 100, 30);

	pincel.fillStyle = "black";
	pincel.fillText("25 a 29,9", 220, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(200, 0, 100, 30);
}

var botao = document.getElementById("botao");
botao.addEventListener("click", calculaImc);