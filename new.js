//Forma de criar Objetos utilizando new()

//Serve para criar instâncias através de função construtora

//Classes são criadas com letras maiusculas.
function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

//Cria um novo objeto usando o prototipo de User. Com isso o novoUser é o contexto de this dentro do objeto
//const novoUser = new User('Guilherme','g@g.com')
//console.log(novoUser.exibirInfos())

//Outra forma de se criar objeto usando new
/*
function Admin(role) {
    //this é o contexto de User que iremos aproveitar dentro de Admin.
    User.call(this, 'Guilherme', 'g@g.com')
    //Se receber role, vai receber o parametro. Se não, será estudante
    this.role = role || 'estudante'
}

//Criando um objeto e passando como parametro a propriedade prototipo de User
Admin.prototype = Object.create(User.prototype) //MAIS USADO
const novoUser = new Admin('Admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)
*/


//Mais um forma
const user = {
    //Forma de criar um construtor
    /*init: function(nome, email) {
        this.nome = nome
        this.email = email
    },*/

    exibirInfos: function(nome) {
        return nome
        //Usada para quando tem construtor e necessita de um contexto
        //return this.nome
    }
}

//User sendo usado como protótipo para novoUser usando objetos diretamente e não com construtora igual no exemplo anterior
const novoUser = Object.create(user)
console.log(novoUser.exibirInfos('Guilherme'))
console.log(user.isPrototypeOf(novoUser))
//Usado quando temos um contrutor criado
//novoUser.init("Guilherme", "g@g.com")
//console.log(novoUser.exibirInfos())

/* Factory functions
Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.

Exemplo de factory function:
function criaUser(nome, email) {
 return {
   nome,
   email,
   exibeInfos() {
     return `${nome}, ${email}`
   }
 }
}
A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades 
(nome e email) e um método interno (exibeInfos()).
*/