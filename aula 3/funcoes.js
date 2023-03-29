//function msgTeste (){ //aqui foi criada uma função
//   console.log("funcionou minha função")
//}

//msgTeste() //este código serve para chamar a função, para executá-la

//function msgTesteArgumento (param){ //o que vai dentro dos () são variáveis
//    console.log("O parâmetro passado foi:", param, "e o tipo dele é", typeof param) 
//}

//msgTesteArgumento("Olá") //aqui foi definido qual o valor da variável localizada nos ()
//msgTesteArgumento(4) 

function Soma (n1, n2) {
    let result = 0

    if (typeof n1 == "number" && typeof n2 == "number") {
        return result = n1 + n2
    } else {
        return result = "Deu bom não"
    }

}

console.log(Soma("oi", "olá"))