//Arquivo contendo informações sobre o Design Patter SOLID
//Aplicado ao conceito de POO

/*
- S: Single responsability principle (principio da responsabilidade unica):
     Cada modulo/classe/metodo só pode ter um motivo para ser alterado. Tarefas específicas.
     Ex: Na classe User devemos ter propriedades e métodos apenas do usuario. Colocar um método
     processarPagamento() por exemplo, não depende do Usuario. Deveria ser criado uma outra classe para
     essa operação.

- O: Open/Closed Principle (Princípio do Aberto/Fechado):
     Cada classe deve ser aberta para ser extendida e fechada para ser modificada.
     Deve ser possivel adicionar novas funcionalidades e dificil de alterar os metodos.
     Ex: Adicionar um metodo exibirRelatorio() em User pois ele precisa fazer isso.

- L: Liskov Substitutios Principle (Principio da substituição liskov)
     Deveria ser possivel substituir uma subclasse pela superclasse sem que pare de funcionar
     Se algo funciona na superclasse deve funcionar na subclasse também.
     Ex: o metodo exibirInfos() que se comporta da mesma forma na superclasse e nas subclasses.

- I: Interface Segregation Principle (Principio da Segregação de Interface)
     Clientes não devem ser forçados a depender de interfaces que eles não usam.
     Ex: UMa pessoa vegetariana não deve ter metodos que envolvam carne em sua classe

- D: Dependency Inversion Principle (Principio da inversão de dependencia)
     Modulos não podem depender de nada que está abaixo deles e nem de conceitos de abstração.
     Esconder como determinados métodos funcionar. Apenas quem usa deve saber
     Ex: um metodo salvarDados() em um BD na classe User e dentro dela não deve ter uma outra classe ConexaoSQL().
    Para isso, deveria ter uma outra classe Conexao.js e dentro dela ter métodos conexaoSQL(), conexaoMongo() e
    na classe User apenas criar uma nova instancia de Conexao()
*/