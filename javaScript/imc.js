function calculaImc() {
	var campoNome = document.getElementById("nome");
	var campoIdade = document.getElementById("idade");
	var campoPeso = document.getElementById("peso");
	var campoAltura = document.getElementById("altura");
	var resposta = document.getElementById("resposta");

	var nome = campoNome.value;
	var idade = campoIdade.value;
	var peso = campoPeso.value;
	var altura = campoAltura.value;

	var dadosValidos = false;

	idade = parseInt(idade);
	peso = parseFloat(peso);
	altura = parseFloat(altura);

	validaDados(nome, idade, peso, altura, dadosValidos);

	var imc = peso / (altura * altura);
	var imcArredondado = imc.toFixed(2);

	resposta.innerHTML = "Olá " + nome + ", seu IMC é " + imcArredondado + " kg. Pode olhar no gráfico abaixo as classficicações dos IMC's.";

	if (dadosValidos == true) {
		desenhaGrafico(imc);
	}
}

function validaDados(nome, idade, peso, altura, dadosValidos) {
	var erroNome = document.getElementById("erro-nome");
	var erroIdade = document.getElementById("erro-idade");

	if (nome.length == 0) {
		erroNome.innerHTML = "Campo vázio!";
	} 
 
	if (idade <= 0 || idade >= 100) {
		erroIdade.innerHTML = "Idade inválida!";
	}
}

function desenhaGrafico(imc) {
	var grafico = document.getElementById("grafico");
	var pincel = grafico.getContext("2d");

	pincel.fillStyle = "black";
	pincel.font = "12px Arial";
	pincel.fillText("Menor que 18,5", 5, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(0, 0, 100, 30);
	pincel.strokeStyle = "black";
	pincel.strokeRect(0, 0, 100, 30);

	pincel.fillStyle = "black";
	pincel.fillText("18,5 a 24,9", 120, 50);
	pincel.fillStyle = "green";
	pincel.fillRect(100, 0, 100, 30);
	pincel.strokeStyle = "black";
	pincel.strokeRect(100, 0, 100, 30);

	pincel.fillStyle = "black";
	pincel.fillText("25 a 29,9", 220, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(200, 0, 100, 30);
	pincel.strokeStyle = "black";
	pincel.strokeRect(200, 0, 100, 30);

	pincel.fillStyle = "black";
	pincel.fillText("30 a 34,9", 320, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(300, 0, 100, 30);
	pincel.strokeStyle = "black";
	pincel.strokeRect(300, 0, 100, 30);

	pincel.fillStyle = "black";
	pincel.fillText("35 a 39,9", 420, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(400, 0, 100, 30);
	pincel.strokeStyle = "black";
	pincel.strokeRect(400, 0, 100, 30);

	pincel.fillStyle = "black";
	pincel.fillText("Maior que 40", 520, 50);
	pincel.fillStyle = "red";
	pincel.fillRect(500, 0, 100, 30);
	pincel.strokeStyle = "black";
	pincel.strokeRect(500, 0, 100, 30);
}

var botao = document.getElementById("botao");
botao.addEventListener("click", calculaImc);