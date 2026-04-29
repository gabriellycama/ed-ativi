//objetos

// 51: Crie um objeto pessoa com nome "Ana" e idade 25

 let pessoa ={
    nome: "ana",
    idade : 25
    
 };
 console.log(pessoa);

 // 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}

 let perfil ={
    nome: "carlos",
    cidade:"sao paulo"
 };
 console.log(`nome${perfil.nome}`);

 // 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
 
let estudante = {
 nome:"maria",
 idade: 20
  
 }
 console.log("antes" , estudante);
 estudante.curso = "curso de portugues";
 console.log("depois", estudante);

 // 54: Altere a idade do objeto {nome: "João", idade: 18} para 19

 let estudantes = {
   nome: "joao ",
   idade : 18
 }
 console.log("idade" ,  estudantes)

 // 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}
 
 let tenis = {
   marca: "nike",
   tamanho:  42,
   cor:"preto"
 }
 for(let prop in tenis){
   console.log(`${prop}: ${tenis[prop]}`);
 }

 // 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"

 let cachorro ={
   nome: "rex",
   latir: function(){
      console.log("au AU ");
   }
 }
 cachorro.latir();

 // 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]