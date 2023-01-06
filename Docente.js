//Mais uma classe de herança seguindo modelo UML. Mesmos conceitos da classe Admin.js
/* As classes utilizam o conceito de Strict Mode.
No inicio de cada arquivo.js ou dentro de cada função, podemos colocar a seguinte condição: "use strict"
essa condição, ou, strict mode, mostra pro usuário erros que geralmente seriam sileciosos.
Por exemplo:
Se houver uma variavel "let nome", essa variável sera uma variavel local.
No entando, se eu remover o let, ela se tornaria uma variavel global, podendo causar inconsistências no código.
Sem o strict mode, o JS não nos acusaria nenhum tipo de erro. Porém, com o Strict mode ele gera um erro de ReferenceError.
*/
import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}`
    }
}

const novoDocente = new Docente("Giulia","g@g.com","2023-01-03")
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante("Giulia","JS"))