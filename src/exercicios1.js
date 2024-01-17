// Faça um programa que leia quatro notas, acumule o valor das notas e depois do loop calcule a média. Em seguida,
// usando if/else if/else, se a média for maior ou igual a 7 imprima na tela, aluno aprovado, se for maior ou igual a 5 imprima aluno em recuperação 
// e se for menor que 5 aluno reprovado.




const readline = require('readline-sync');
 
let soma_notas = 0;
let mediaNotas = 0;
for (i = 1; i <=4; i++) {
    const nota = readline.questionFloat("Informe uma nota: ");
    soma_notas += nota;
   
     
    mediaNotas = soma_notas / 4;

}if (mediaNotas >= 7) {
    console.log("Aluno Aprovado")
}else if(mediaNotas >= 5){
    console.log("Aluno em Recuperação")
}else{
    console.log("Aluno Reprovado")
}


        