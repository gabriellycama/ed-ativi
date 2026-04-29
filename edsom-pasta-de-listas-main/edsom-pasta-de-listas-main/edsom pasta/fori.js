// exercicio forEach
console.log("========= exercicio : mostra  elemento")
{
let numeros = [1,2,3,4];
console.log("usando o for");
for(let i=0; i<numeros.length; i ++){
    console.log(i);
}
console.log("usando foreach");
numeros.forEach(function(n){
    if(n %2)
    console.log(n);
});


console.log("forEach arrow modo seta");
numeros.forEach(n => console.log(n));
}

let frutasss = ["maça","banana","uva","abacate"];

frutasss.forEach(function(n){
     console.log(n);
});
frutasss.forEach(n=> console.log(n));


// some todos os valores e mostre o resultado
//preços 10,20,30,60

let preco= [10,20,30,60];
let somamo =0;
preco.forEach(function(preco){
    somamo +=preco;
});
console.log(somamo);
