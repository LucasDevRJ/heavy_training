function calculaImc() {
	var campoNome = document.getElementById("nome");
	var campoIdade = document.getElementById("idade");
	var campoPeso = document.getElementById("peso");
	var campoAltura = document.getElementById("altura");
	var resposta = document.getElementById("resposta-imc");

	var nome = campoNome.value;
	var idade = campoIdade.value;
	var peso = campoPeso.value;
	var altura = campoAltura.value;

	var erroNome = document.getElementById("erro-nome");
	var erroIdade = document.getElementById("erro-idade");
	var erroPeso = document.getElementById("erro-peso");
	var erroAltura = document.getElementById("erro-altura");

	var nomeValido = false;
	var idadeValida = false;
	var pesoValido = false;
	var alturaValida = false;

	if (nome.length == 0) {
		erroNome.innerHTML = "Campo vázio!";
	} else {
		erroNome.innerHTML = "";
		nomeValido = true;
	}
 
	if (idade <= 0 || idade >= 100) {
		erroIdade.innerHTML = "Idade inválida!";
	} else {
		erroIdade.innerHTML = "";
		idadeValida = true;
	}

	if (peso <= 0 || peso >= 200) {
		erroPeso.innerHTML = "Peso inválido!";
	} else {
		erroPeso.innerHTML = "";
		pesoValido = true;
	}

	if (altura <= 0.0 || altura >= 3.00) {
		erroAltura.innerHTML = "Altura inválida!";
	} else {
		erroAltura.innerHTML = "";
		alturaValida = true;
	}

	idade = parseInt(idade);
	peso = parseFloat(peso);
	altura = parseFloat(altura);

	var imc = peso / (altura * altura);
	var imcArredondado = imc.toFixed(2);

	if (nomeValido == true && idadeValida == true 
		&& pesoValido == true && alturaValida == true) {
		resposta.innerHTML = "Olá " + nome + ", seu IMC é " + imcArredondado + " kg. Pode olhar no gráfico abaixo as classficicações dos IMC's.";
		desenhaGrafico(imc);
		calculaFrequenciaCardiacaRecomendada(idade);
	}
}

function desenhaGrafico(imc) {
	var grafico = document.getElementById("grafico");
	var pincel = grafico.getContext("2d");
	var x;
	var y = 0;

	for (var i = 0; i <= 500; i = i + 100) {
		x = i;

		pincel.fillStyle = "black";
		pincel.font = "12px Arial";
		pincel.fillStyle = "red";

		if (x == 0) {
			pincel.fillText("Menor que 18,5", 5, 50);
		} else if (x == 100) {
			pincel.fillText("18,5 a 24,9", 120, 50);
			pincel.fillStyle = "green";
		} else if (x == 200) {
			pincel.fillText("25 a 29,9", 220, 50);
		} else if (x == 300) {
			pincel.fillText("30 a 34,9", 320, 50);
		} else if (x == 400) {
			pincel.fillText("35 a 39,9", 420, 50);
		} else {
			pincel.fillText("Maior que 40", 520, 50);
		}
		
		pincel.fillRect(x, y, 100, 30);
		pincel.strokeStyle = "black";
		pincel.strokeRect(x, y, 100, 30);
	}
}

function calculaFrequenciaCardiacaRecomendada(idade) {
	var resposta = document.getElementById("resposta-frequencia-cardiaca");

	var frequenciaMaxima = 220;
	var frequencia = frequenciaMaxima - idade;

	resposta.innerHTML = "A sua frequência cardíaca adequada é " + frequencia + " bpm.";
}

var botao = document.getElementById("botao");
botao.addEventListener("click", calculaImc);