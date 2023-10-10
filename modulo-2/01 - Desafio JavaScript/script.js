console.log("############");
console.log(
  'Exercício #1 - Crie uma condição composta com uma variável dia, a condição deverá verificar se está de dia, se estiver, mostre "claro", caso contrário mostre "de noite":'
);

let dia = true;

if (dia == true) {
  console.log("Claro");
} else {
  console.log("De noite");
}

console.log("############");

console.log(
  "Exercício #02 - Crie um loop for() que exiba apenas números pares até o 20 no console:"
);

for (let pares = 0; pares <= 20; pares += 2) {
  console.log(pares);
}

console.log("############");

console.log(
  "Exercício #03 - Crie uma função que exiba uma mensagem no console:"
);

function exibirMensagemConsole() {
  console.log("Mensagem sendo exibida no console");
}

exibirMensagemConsole();

console.log("############");

console.log(
  "Exercício #04 - Crie uma função que receba o seu nome como (parâmetro) e exiba no console:"
);

function exibirNomeConsole(nome) {
  console.log(nome);
}

exibirNomeConsole("Gui");

console.log("############");

console.log(
  "Exercício #05 - Crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console:"
);

function apresentacao(nome, idade, estiloMusical) {
  console.log(
    `Olá, meu nome é ${nome}, tenho ${idade} anos, e meu estilo musical favorito se resume à ${estiloMusical}. `
  );
}

apresentacao("Gui", 26, "tudo que seja produzido pela Letrux");

console.log("############");

console.log(
  "Exercício #06 - Crie uma função que receba um filme, uma música (parâmetros) e exiba no console:"
);

function midiasFavoritas(filme, musica) {
  console.log(
    `Olá, meu filme favorito é ${filme}, e a minha música favorita é ${musica}.`
  );
}

midiasFavoritas("Nausicaä do Vale do Vento", "Flerte Revival, da Letrux");

console.log("############");

console.log(
  "Exercício #07 - Crie uma função que retorne o triplo do número recebido no parâmetro da função:"
);

function triplo(numero) {
  console.log(numero * 3);
}

triplo(2);
triplo(3);

console.log("############");

console.log(
  "Exercício #08 - Crie uma função que  verifique se uma  variável é true ou false:"
);

function trueOrFalse(variavel) {
  if (variavel == true) {
    console.log(`A variável é verdadeira`);
  } else {
    console.log(`A variável é falsa`);
  }
}

trueOrFalse(true);
trueOrFalse(false);

console.log("############");

console.log(
  "Exercício #09 - Crie um array que receba 5 itens e exiba no console:"
);

let frutas = ["banana", "maçã", "kiwi", "laranja", "goiaba"];
console.log(frutas);

console.log("############");

console.log(
  "Exercício #10 - Utilize um método para adicionar um nome ao inicio do array:"
);

frutas.unshift("morango");
console.log(frutas);

console.log("############");

console.log(
  "Exercício #11 - Utilize um método para remover o último nome do array:"
);

frutas.pop();
console.log(frutas);

console.log("############");

console.log(
  "Exercício #12 - Utilize um método para adicionar dois nomes ao fim do array:"
);

frutas.push("uva", "melancia");
console.log(frutas);

console.log("############");

console.log(
  "Exercício #13 - Utilize um método para remover o primeiro nome do array:"
);

frutas.shift();
console.log(frutas);

console.log("############");

console.log(
  "Exercício #14 - Utilize um método para organizar em ordem crescente o seguinte array:"
);

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(numbers);
numbers.sort();
console.log(numbers);

console.log("############");

console.log(
  "Exercício #15 - Crie um objeto que receba ao menos três propriedades sobre você:"
);

let gui = {
  idade: 25,
  signo: "escorpião",
  aniversario: "01/11",
};

console.log(gui);

console.log("############");

console.log(
  "Exercício #16 - Adicione uma nova propriedade sem alterar seu objeto inicial:"
);

let guiIA = { ...gui, composicaoFisica: "metal" };

console.log(guiIA);

console.log("############");

console.log("Exercício #17 - Remova uma propriedade desse objeto:");

delete guiIA.idade;

console.log(guiIA);

console.log("############");

console.log(
  "Exercício #18 - Mostre no console todas as propriedades desse objeto:"
);

console.log(`Gui:`, gui);
console.log(`GuiIA:`, guiIA);

console.log("############");

console.log(
  "Exercício #19 - Crie um array  chamado 'cadastro' contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. Na propriedade amigos, adicione ao menos 4 amigos."
);

let cadastro = [
  {
    nome: "Gui",
    idade: 25,
    telefone: "47 99999-9999",
    amigos: ["Thai", "Gab", "Gus", "Law"],
  },
  {
    nome: "Thai",
    idade: 25,
    telefone: "47 99999-9999",
    amigos: ["Gui", "Gab", "Gus", "Law"],
  },
  {
    nome: "Gab",
    idade: 25,
    telefone: "47 99999-9999",
    amigos: ["Gus", "Gui", "Thai", "Law"],
  },
  {
    nome: "Gus",
    idade: 25,
    telefone: "47 99999-9999",
    amigos: ["Law", "Gab", "Gui", "Thai"],
  },
  {
    nome: "Law",
    idade: 25,
    telefone: "47 99999-9999",
    amigos: ["Gab", "Thai", "Gus", "Gui"],
  },
];

console.log(cadastro);

console.log("############");

console.log(
  "Exercício #20 - Mostre no console o nome de um amigo de cada lista:"
);

cadastro.forEach((pessoa) => {
  const amigo = pessoa.amigos[0];
  console.log(`Amigo de ${pessoa.nome}: ${amigo}`);
});
