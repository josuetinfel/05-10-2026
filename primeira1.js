// const Nome = "Josué"
// Nome = "José"
// var Idade = 16
// console.log(Nome + Nome);


// let preco = 
// console.log(typeof preco);

// const nome = "Ana";
// const idade = 25;
// const altura = 1.68;
// const temCnh = true;
// const fotoPerfil = null;
// let endereco ;
// const idUnico = Symbol("id");
// const numeroGrande = 9007199254740991n;

// console.log(typeof nome);         
// console.log(typeof idade);        
// console.log(typeof temCnh);       
// console.log(typeof fotoPerfil);  
// console.log(typeof endereco);     
// console.log(typeof idUnico);      
// console.log(typeof numeroGrande); 


// let bloco = {}
// let bloco2 = {"josue","joao"}
//um deu erro pois nao deu certo porque nao tinha nada.
//e o outro deu certo pois tinha itens dentros das chaves.


// 6. Cria duas variáveis numéricas (a = 15 e b = 4) e exibe na consola os resultados da
// adição, subtração, multiplicação, divisão e resto da divisão (%).
// 7. Calcula a área de um retângulo com largura 8 e altura 5, armazenando o resultado numa
// variável chamada area.
// 8. Declara duas variáveis de texto, primeiroNome e ultimoNome, e junta-as (concatena)
// utilizando o operador + com um espaço entre elas.
// 9. Refaz o exercício anterior utilizando Template Literals (sintaxe com crases `Olá
// ${nome}`).
// 10. Usa o operador de exponenciação (**) para calcular 2
// 8 e imprime o resultado na consola.

// let a = 15;
// let b = 4;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);


// let largura = 8;
// let altura = 5;
// let area = largura * altura;
// console.log(area);


// let primeiroNome = "Josué";
// let ultimoNome = "Tinfel";
// let nomeCompleto = primeiroNome + " " + ultimoNome;
// console.log(nomeCompleto);

// let primeiroNome = "Josué";
// let ultimoNome = "Tinfel";
// let nomeCompleto = `${primeiroNome} ${ultimoNome}`;
// console.log(nomeCompleto);


// let resultado = 2 ** 8;
// console.log(resultado);


// 11. Compara o número 10 com a string '10' usando == e depois com ===. Imprime ambos os
// resultados e observa a diferença.
// 12. Escreve uma expressão que verifique se o número 25 é estritamente diferente de '25'
// (!==).
// 13. Cria duas variáveis booleanas: temCarteira = true e maiorDeIdade = false. Usa o
// operador && para verificar se a pessoa pode conduzir.
// 14. Com base nas variáveis do exercício anterior, usa o operador || para verificar se a pessoa
// satisfaz pelo menos uma das condições.
// 15. Usa o operador de negação ! para inverter o valor de uma variável booleana ativo = true.



// let comparacaoIgual = 10 == '10';
// console.log(comparacaoIgual);

// let comparacaoEstrita = 10 === '10';
// console.log(comparacaoEstrita);

// let comparacaoDiferente = 25 !== '25';
// console.log(comparacaoDiferente);


// let temCarteira = true;
// let maiorDeIdade = false;
// let podeConduzir = temCarteira && maiorDeIdade;
// console.log(podeConduzir);

// let podeConduzir2 = temCarteira || maiorDeIdade;
// console.log(podeConduzir2);

// let ativo = true;
// let inativo = !ativo;
// console.log(inativo);


// 16. Executa a operação '5' + 3 na consola, observa o resultado e explica por que razão
// ocorreu a concatenação.
// 17. Executa a operação '10' - 2 na consola, observa o resultado e explica por que razão o
// JavaScript realizou a conversão para número.
// 18. Converte explicitamente a string '123.45' para o tipo número usando Number() ou
// parseFloat(), e depois soma 10 ao valor.
// 19. Converte o valor 0 para booleano utilizando Boolean(0) e explica por que razão o
// resultado é false.
// 20. Desafio de Atribuição: Cria uma variável saldo = 100. Utiliza os operadores de
// atribuição reduzida (+=, -=, *=, /=) para:
// ○ Adicionar 50 ao saldo
// ○ Subtrair 20 do saldo
// ○ Dobrar o saldo (*= 2)
// ○ Dividir o saldo por 4
// Imprime o valor final do saldo


// let resultado = '5' + 3;
// console.log(resultado); 

// let resultado2 = '10' - 2;
// console.log(resultado2);

// let numeroString = '123.45';
// let numeroConvertido = Number(numeroString);
// let soma = numeroConvertido + 10;
// console.log(soma);

// let valor = 0;
// let booleano = Boolean(valor);
// console.log(booleano);

// let saldo = 100;
// saldo += 50;
// saldo -= 20;
// saldo *= 2;
// saldo /= 4;
// console.log(saldo);

// let saldo = 100;
// saldo += 50;        
// saldo -= 20;
// saldo *= 2;
// saldo /= 4;
// console.log(saldo);
