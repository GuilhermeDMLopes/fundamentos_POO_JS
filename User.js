// Arquivo explicando conceito de polimorfismo dos métodos de uma classe
// Possibilidade das subclasses usarem um método do super classe com comportamentos específicos de cada subclasse
export default class User {    
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
    
    get nome() {        
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

    set nome(novoNome) {        
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
    
    #montaObjUser() {        
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {        
        return `${this.nome}, ${this.email}, ${this.role}`
    }
}