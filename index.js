//Arquivo com instancias das classes para vermos o encapsulamento

import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

/*
Sem o encapsulamento, o trecho a seguir conseguiria alterar o nome do nosso Objeto facilmente.
Isso gera uma grave falha de segurança no código

const novoUser = new User("Guilherme","g@g.com","2023-01-03")
console.log(novoUser.exibirInfos())
novoUser.nome = "Giulia"
console.log(novoUser.exibirInfos())
*/

/*
Com o encapsulamento, o trecho mantém o nome do Objeto original criado que é Guilherme
const novoUser = new User("Guilherme","g@g.com","2023-01-03")
console.log(novoUser.exibirInfos())
novoUser.nome = "Giulia"
console.log(novoUser.exibirInfos())
*/

const novoUser = new User("Guilherme","g@g.com","2023-01-03")
//console.log(novoUser.#montaObjUser()) //Não é possível acessar o metodo fora da classe
//Modificando o método exibirInfos() na classe User.js. Agora conseguimos acessar
//console.log(novoUser.exibirInfos())


const novoAdmin = new Admin('Rodrigo','r@r.com','2023-01-03')
//console.log(novoAdmin.exibirInfos())
//console.log(novoAdmin.nome) //Resulta undefined sem o Getter
/*
Criamos um método para testar o retorno da subclasse
Como a classe mãe possui propriedade nome privada, as subclasses não conseguem mais acessar
Para conseguir acessar e contorar esse problema, precisarem utilizar os Acessors (ou Getters e Setters)
Após criar o getter na classe User, conseguiremos acessar o nome do Admin
console.log(novoAdmin.nome)
*/
//Após definir os Setters em User, podemos manipular as propriedades de Admin
console.log(novoAdmin.nome)
novoAdmin.nome = 'André'
console.log(novoAdmin.nome)
console.log(novoAdmin.exibirInfos())


//const novoDocente = new Docente('Giulia','giu@giu.com','2023-01-03')