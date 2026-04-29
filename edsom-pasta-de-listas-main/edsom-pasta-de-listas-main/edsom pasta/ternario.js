/*EXERCÍCIO 1 (Fácil)
Verifique se um número é positivo ou não.*/

let numero = 2;
let resultado = numero >0 ?"positivo":"negativo";
console.log(`o numero  ${numero}  e ${resultado}`);


/*EXERCÍCIO 2 (Fácil)
Verifique se uma pessoa pode votar.
- Se sim, retorne "Pode votar"- Se não, "Não pode votar"*/

let idade = 11;

let votoar = idade >18?"votar":"  nao  pode votar";
console.log(` com ${idade}  voce pode ${votoar}`);



/*EXERCÍCIO 3 (Fácil)
Descubra se um número é par ou ímpar.
- Se par, retorne "Par"- Se ímpar, retorne "Ímpar"*/


let num = 7;
let parOuImpar = num % 2 ===0  ? "par" :"impar";
console.log(`${num} e: ${parOuImpar}`);


/*EXERCÍCIO 4 (Fácil)
Crie uma verificação de nível de acesso.
- Se nível for "admin", retorne "Acesso total"
- Caso contrário, "Acesso restrito"*/


let  nivel ="admin";
let acesso = nivel === "admin"?"acesso total":"acesso restrito";
console.log(`nivel${nivel}:${acesso}`);


/*EXERCÍCIO 5 (Médio-Fácil)
Aplique desconto em um produto.
- Se preço > 100, aplique 10% de desconto (multiplicar por 0.9)
- Caso contrário, mantenha o preço original*/

let preco = 120;
let precoTotal = preco > 100 ? preco*0.9 : preco;
console.log(`preco original: r$ ${preco}, com desconto r$ ${precoTotal}`);

/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
 let  nota = 7.5;
 let statusAluno =  nota >=7 ? "aprovado":"reprovado";
 console.log(`nota ${nota}: ${statusAluno}`);


 /*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/

let valor = 12;
let resultado1 = valor % 2  ===0 && valor > 10 ?"atende aos criterios":"nao atende";
console.log(`valor ${valor}: ${resultado1}`);


/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/

let num2= -3;

let tipo = num2 >0 ? "positivo": num2<0 ? "negativo":"zero";
console.log(`${num2} e: ${tipo}`);


/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/


let admin= "admin";
let senha = "1234";

let login = usuario === "admin" && senha ==="1234"? "log ok ":"falhe no log";
console.log(login);


/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/

let idadePessoa = 51;
let Classificacao = idadePessoa <12 ? "criança":
idadePessoa <= 17 ? "adolecente":
idadePessoa <= 59 ? "adulto": "idoso"
console.log(`idade${idadePessoa}: ${Classificacao}`)
