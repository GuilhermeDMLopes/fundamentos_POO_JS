// Definição de objeto literal (Objeto como variavel). Seguimos diagrama UML conforme link:

/*
Classe é o modelo de onde tiramos nossos objetos
Esse conceito não existia antes do ES6(2015)
Antigamente utilizava o conceito de herança de protótipo. É uma forma de fazer modelos de objetos
*/

//herança de protótipo

const user = {
    nome: "Guilherme",
    email: "guilherme@servidor.com",
    nascimento: "2023/01/03",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        //this é um Objeto para definir contextos.
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()

/*
const exibir = user.exibirInfos
exibir() //Retorna Undefined undefined.
//Isso acontece porque funciona mais ou menos dessa forma:

const exibir = function() {
    console.log(this.nome, this.email)    
}
Ou seja, o this não tem contexto


//Para funcionar, devemos fazer:
//Metodo para prender a execução de um contexto específico
const exibirNome = exibir.bind(user)
exibirNome()

//Outro tipo de uso
const exibeEmail = function() {
    console.log(this.email)
}
const mostraEmail = exibeEmail.bind(user)
mostraEmail()


Existem também outra duas formas alem do bind(). São os métodos call() e apply()
link com descrição destes métodos: https://cursos.alura.com.br/course/javascript-passos-programacao-orientada-objetos/task/103416



Porque utilizar function tradicional e não arrowFunction?
A primeira diferença entre a declaração de função e as expressões de função é o hoisting. Mas, além do hoisting, existe outra diferença 
principal entre declaração de função e arrow function: ao contrário das funções normais, arrow functions herdam automaticamente o contexto 
de onde foram criadas e não têm seu próprio “contexto de invocação”. Ou seja, não podem ser ligadas a contextos específicos com this e nem 
fazer uso dos métodos bind(), call() e apply().
Arrow functions também não possuem a propriedade prototype e por isso não podem ser usadas como funções construtoras - assunto que veremos em 
seguida. Por este motivo, não usamos arrow functions em nenhum momento para a criação de métodos durante o curso.
Link de referencia: https://cursos.alura.com.br/course/javascript-passos-programacao-orientada-objetos/task/108559
*/

// Fazendo 'herança de prototipos'
const admin = {
    nome: "Giulia",
    email: "giulia@servidor.com",
    nascimento: "2023/01/03",
    role: "admin",
    criarCurso() {
        console.log("curso criado")
    }
}
//Parametros: (Objeto que vai herdar os prototipos, Objeto que tera propriedades herdadas)
//Definimos que user é um protótipo de admin
Object.setPrototypeOf(admin, user)
//admin.criarCurso()
//admin.exibirInfos()
//Isso se chama cadeia de protótipo

//No console do navegador conseguimos acessar quem está sendo prototipado (EM DESUSO)
//no exemplo acima, fazemos: admin.__proto__
//Se quisermos ir mais fundo ainda, podemos seguir fazendo: admin.__proto__.__proto__ ...
/*
- __proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto.
- prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.
*/