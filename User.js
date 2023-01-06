// Arquivo explicando conceito de encapsulamento das propriedades e métodos de uma classe
//Protegendo dados que não devem ser acessados/manipulados por fora da classe

export default class User {
    //Declarado uma propriedade privada. Deve ser feita antes do construtor
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento        
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    //Criando Getter
    //Criamos com o mesmo nome da variavel para o usuário não perceber que se trata de uma função getter
    get nome() {
        //Pode ter lógicas condicionais
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {        
        return this.#role
    }

    get ativo() {        
        return this.#ativo
    }

    //Criando Setters
    //Criamos com o mesmo nome da variavel para o usuário não perceber que se trata de uma função setter
    set nome(novoNome) {
        //Pode ter lógicas condicionais
        if(novoNome === ''){
            throw new Error('Formato inválido')
        }
        return this.#nome = novoNome
    }

    set email(novoEmail) {
        return this.#email = novoEmail
    }

    set nascimento(novoNascimento) {
        return this.#nascimento = novoNascimento
    }

    set role(novoRole) {        
        return this.#role = novoRole
    }

    set ativo(novoAtivo) {        
        return this.#ativo = novoAtivo
    }
    
    //Declarando método privado
    #montaObjUser() {
        //Para retornar um objeto, devemos usar a seguinte sintaxe
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        //return `${this.#nome}, ${this.#email}`
        /*Forma de retornar um método privado
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}`*/
        //Depois dos getters e setters, o this recebe o contexto de get e set
        return `${this.nome}, ${this.email}`
    }
}

/* Antigamente não existia a sintaxe #. Para declarar propriedades privadas, 
usáva-se "_" antes da variavel.
*/

/*Exemplo de Uso de Getters e Setters
Preciso juntar nome e sobrenome de um usuario e devem ser propriedades distintas
default class User {
 #nome
 #sobrenome
  constructor (nome, sobrenome, email, nascimento, role, ativo = true) {
   this.#nome = nome
   this.#sobrenome = sobrenome
   // restante das propriedades
  }

   set nome(novoNome) {
   if (novoNome === '') {
     throw new Error('formato não válido')
   }
   let [nome, ...sobrenome] = novoNome.split(" ")
   sobrenome = sobrenome.join(' ')
   this.#nome = nome
   this.#sobrenome = sobrenome
 }

  get nome() {
   return this.#nome
 }

 get sobrenome() {
   return this.#sobrenome
 }

}

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'
*/