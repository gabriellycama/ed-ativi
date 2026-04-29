//gabrielly



// 1 exiba a mensagem "ola mundo" no console

console.log("ola mundo");


// 2. crie uma variavel com seu nome  e exiba o valor no console

let nome = "camile";
console.log(nome);

//3. some dois numeros e exiba e resultado

let c =1;
let h =4;
console.log(c+h);


let soma = 10 + 3;

console.log(soma);

//4.subtraia dois numero e exiba o valor

let sub = 10 -3;
console.log(sub);

//5 descubra o resto da divisao de um numero por outro
let restos = 10%3;
console.log(restos)


//6. crie uma variavel boleana(true false) e exiba seu valor.

let bola = true;
console.log(bola);

//7. verifique se um numero e maior q outro 

let maiorque = 18>11;
console.log(maiorque);

//8.crie duas variaveis com algum valor e exiba a 

let sola=2;

let solo=5;

console.log(sola,solo);
// professor
let num1 = "teste";
let num2 ="teste2";

console.log(`teste ${num1} ${num2}`);

//9.descubra o tipo de uma variavel;
let valor = 100;
console.log(typeof valor); // typeof mostra o tipo da  variavel

//10 converta numero para string

let valors= 20;
console.log(String(valors));

//11. string para numero
let texto = "123";
console.log(Number(texto));


//12 exiba no console numeros de 0 a 10.

//for(let i = 0; i<=10; i++){
 //   console.log(i);

//}


// exiba apenas numeros pares ate 20.

for(let i = 1; i<=20; i+=2){
    
    console.log(i);
}

//14 mostre no console de 10 ate 1 


for(let i =10; i>1; i--){
    console.log(i);
}

// 15. some numeros de 1 a 5.
let somaloop =0;
for(let i = 1; i<=5; i++){
    somaloop+=i;
    console.log("valor de i"+i+"valor de somaloop"+somaloop);
}
console.log(somaloop);

//16. faça a  tabuada do 3.

//for(let i =1; i<=10; i++){
   // console.log("3 x" +i+"="+3*i);
//}

//17. conte quantos numeros sao maiores que 5

let lista=[2,6,8,1,3];
let cont = 0;
for(let i=0; i<lista.length;i++){
    if(lista[i]>5)cont++;
}
console.log(cont); 


//18.percorra a string letra por letra

let palavra="JFRS"


//19.pare um loop quando encontrar o numero 7 de 0 a 10 

for(let i = 0; i<=10; i++){
    
    if(i===7) break;
        
    console.log(i);
}


//20 crie uma funçao que exibe uma mensagem.

function notficacao(){
   console.log("tu e gay");
}
notficacao()

// crie uma funçao que multiplica 2 numero

function  multiplica(a,b){
    return a *b;


}
console.log(multiplica(2,3));

//22 crie uma funçao pye verifica se e  par ou impar.

function verificar(num){
    return  num  % 2 ===0 ? "par": "impar";


}
console.log(verificar(11));

//23 crie uma funçao que retorne o dobro

function  dobro(n){
    return n*2;


}
console.log(dobro(5));



//24 crie uma funçao que some elementos de um array.

function somaArray(arr){
    total=0;
    for(let i=0; i<arr.length;i++){
        total +=arr[i];
    }
       
    return total;

}
 console.log(somaArray([2,5,6,67]));


 //25 verifique se onumero 15 e positivo e exiba uma mensagen
 let numero = 15;
 if(numero>0){
      console.log(`${numero}e positivo`);
 }

 // verifique se uma pessoa  com 17 anos e maior de idade
 console.log("\n ======== maior ou menor de idade")
 let idade =17;
 if(idade>=18){
     console.log("maior de idade");

 }else{
    console.log("menor de idade");
 }

 // 27. crie um array com os numeros 10,20 , 30,40 e exiba todos

 let numero_array =[10,20,30,40]
 console.log(numero_array);

 //28 crie um array com 5 frutas exiba a primeira fruta

 let frutass=['banana','uva','morango','laranja','pera']

 console.log(frutass[0]);


 //29.adcione o numero 50 no final do array[10,20,30,40]
 let arr = [10,20,30,40];

 arr.push(50);

 console.log(arr);

 /// 30. Remova o último elemento do array [1, 2, 3, 4, 5]

 let numerosss=[1,2,3,4,5,]
  arr.pop();
  console.log(arr)

  // 31: Exiba quantos elementos tem o array [5, 10, 15, 20]

  let arr3 = [5,10,15,20];
  console.log(`o array tem ${arr3.length} elemento`);

  // 32: Some todos os números do array [2, 4, 6, 8]

 // let arr4 = [2,4,6,8];
 // let somaarr4 = 0 ;
 // for(let i=0; i <arr4.length; i++);{
 //    arr4 = somaarr4 + arr4 [i];
 // }

 //console.log(`à soma dos elementos e:`${somaarry4});


 //


 