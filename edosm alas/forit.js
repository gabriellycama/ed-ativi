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
    console.log(n);
});


console.log("forEach arrow modo seta");
numeros.forEach(n => console.log(n));
}
