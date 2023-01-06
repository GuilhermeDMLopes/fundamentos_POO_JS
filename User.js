// Arquivo explicando conceito de classe um JS
//Como observado, arquivos de classes devem inciar em letra maiúscula
//Seguindo o diagrama UML:

//Export default para quando for trabalhar com heranças de classes
export default class User {
    //construtor de classe
    //ativo ja pode ser começado como padrão como true
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        //Vai receber um parametro, se não receber é setado como estudante
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    //Na classe, não precisamos criar funções para definir métodos
    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

/*
// instanciando a classe
const novoUser = new User('Guilherme', 'g@g.com', '2023-01-03')
console.log(novoUser)
console.log(novoUser.exibirInfos())
console.log(User.prototype.isPrototypeOf(novoUser)) //Tem que retornar true
*/