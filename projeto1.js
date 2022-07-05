var prompt = require('prompt-sync')();

let dia = 0;
let nao = 5;
let parte1 = true;
let parte2 = true;
let parte3 = true;
let parte4 = true;
let parte5 = true;

while (dia < 5 && nao >= 1) {

  //Parte 1
  while (parte1 == true) {
    console.clear();
    console.log('Trrrrrim, trrrrrrim! Trrrrrrrim, trrrrrrrrim!');
    console.log('Alarme das 06:00');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log('Trrrrrim, trrrrrrim! Trrrrrrrim, trrrrrrrrim!');
    console.log('Alarme das 06:03');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    dia++
    console.clear();
    console.log(`Hoje é o ${dia} e seu despertador marca 06:03`)
    console.log();
    console.log();
    console.log();
    console.log("Deseja levantar?");
    console.log();
    console.log();
    console.log();
    console.log();
    console.log("Responda 'SIM' para levantar da cama, responda 'Não' para continuar dormindo.");
    resposta = prompt('').toLowerCase();
    console.clear();

    if (resposta === 'sim') {
      parte1 = false;
      parte2 = true;
    } else if (dia >= 5) {
      console.clear();
      console.log('Você dormiu o dia todo...');
      console.log();
      console.log();
      console.log();
      console.log(prompt('Pressione ENTER para continuar'));
      nao = nao - 1;
      console.clear();
      parte1 = false;
      parte2 = false;
      parte3 = false;
      parte4 = false;
      parte5 = false;
    };
  };

  //Parte 2
  while (parte2 == true) {
    console.clear();
    console.log('Você esta tomando banho.');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log(`Hoje é o ${dia} são 06:30`);
    console.log();
    console.log();
    console.log();
    console.log('Deseja sair de casa e ir ao trabalho?');
    console.log();
    console.log();
    console.log();
    console.log();
    console.log("Responda 'SIM' para sair ao trabalho, responda 'Não' para ficar em casa.");
    resposta = prompt('').toLowerCase();
    console.clear();

    if (resposta === 'sim') {
      parte2 = false;
      parte3 = true;
    } else {
      nao = nao - 1;
      console.log('Você ficou em casa e o dia se passou, são 23:00 e você vai dormir.');
      console.log();
      console.log();
      console.log();
      console.log(prompt('Pressione ENTER para continuar'));
      parte1 = true;
      parte2 = false;
      parte3 = false;
      parte4 = false;
      parte5 = false;
    };
  };

  //Parte 3
  while (parte3 == true) {
    console.clear();
    console.log('Você esta a caminho do trabalho e seu celular começa a tocar');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log('Você atende e é a sua namorada te convidando para ficar o dia todo com ela.');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log(`Hoje é o ${dia} são 07:00`);
    console.log();
    console.log();
    console.log();
    console.log('Deseja ir ao trabalho?');
    console.log();
    console.log();
    console.log();
    console.log();
    console.log("Responda 'SIM' para sair ao trabalho, responda 'Não' para ir à casa da sua namorada.");
    resposta = prompt('').toLowerCase();
    console.clear();

    if (resposta === 'sim') {
      parte1 = false;
      parte2 = false;
      parte3 = false;
      parte4 = true;
    } else {
      nao = nao - 1;
      console.log('Você ficou o dia todo com a sua namorada, voltou para casa a noite. São 23:00 e você foi dormir.');
      console.log();
      console.log();
      console.log();
      console.log(prompt('Pressione ENTER para continuar'));
      parte1 = true;
      parte2 = false;
      parte3 = false;
      parte4 = false;
      parte5 = false;
    };
  };

  //Parte 4
  while (parte4 == true) {
    console.clear();
    console.log('Você esta na porta da empresa onde você trabalha.');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log('Hoje seu dia esta repleto de atividades e você tem marcado uma reunião com o seu chefe.');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log(`Hoje é o ${dia} são 07:45`);
    console.log();
    console.log();
    console.log();
    console.log('Deseja entrar na empresa?');
    console.log();
    console.log();
    console.log();
    console.log();
    console.log("Responda 'SIM' para entrar, responda 'Não' para voltar para casa.");
    resposta = prompt('').toLowerCase();
    console.clear();

    if (resposta === 'sim') {
      parte1 = false;
      parte2 = false;
      parte3 = false;
      parte4 = false;
      parte5 = true;
    } else {
      nao = nao - 1;
      console.log('Você não entrou na empresa, voltou para casa e ficou o dia todo jogando videogame, são 23:00 e você foi dormir.');
      console.log();
      console.log();
      console.log();
      console.log(prompt('Pressione ENTER para continuar'));
      parte1 = true;
      parte2 = false;
      parte3 = false;
      parte4 = false;
      parte5 = false;
    };
  };


  //Parte 5
  while (parte5 == true) {
    console.clear();
    console.log('São 07:50 e você chegou no seu posto de trabalho');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log('Seu jefe te chamou para a reunião, ');
    console.log();
    console.log();
    console.log();
    console.log(prompt('Pressione ENTER para continuar'));
    console.clear();
    console.log('Você deseja ir a reunião?');
    console.log();
    console.log();
    console.log();
    console.log();
    console.log("Responda 'SIM' para entrar, responda 'Não' para ignorar.");
    resposta = prompt('').toLowerCase();
    console.clear();

    if (resposta === 'sim') {
      parte1 = false;
      parte2 = false;
      parte3 = false;
      parte4 = false;
      parte5 = false;
      dia = 6;
    } else {
      nao = nao - 1;
      parte1 = false;
      parte2 = false;
      parte3 = false;
      parte4 = false;
      parte5 = false;
      dia = 6;
    };
  };
};

if (nao === 1) {
  console.log('Você foi demitido');
} else if (nao === 2) {
  console.log('Você ainda esta empregado mas levou 3 dias de suspensão');
} else if (nao === 3) {
  console.log('Você levou 1 dia de suspensão');
} else if (nao === 4) {
  console.log('Você foi questionado pelo seu chefe por ter faltado mas não aconteceu nada de mais.');
} else if (nao === 5) {
  console.log('Você chegou no seu trabalho a tempo e seu chefe te chamou para te parabenizar pelo aumento que acabou de ganhar por ser um ótimo funcionário.');
};
