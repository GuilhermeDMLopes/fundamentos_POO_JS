//Fazendo herança de classe
import User from './User.js';

class Admin extends User {
    //Se vamos reaproveitar a classe Mãe, porque colocar construtor?
    //POis nem sempre vamos querer reaproveitar tudo da classe mãe
    //Passamos no construtor e na classe super apenas o que queremos usar para a classe
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        //Como vamos reaproveitar tudo que está em usuario, fazemos da seguinte forma
        super(nome, email, nascimento, role, ativo)
    }

    //Método particular da subclasse de User
    criarCurso(nomeDoCurso, vagas) {
        return `${nomeDoCurso}, criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2023-01-03')
console.log(novoAdmin)
//Como herdamos de User, temos acesso as propriedades e aos métodos de classe mãe
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JS', 20))

//Classes não possuem hoisting!!