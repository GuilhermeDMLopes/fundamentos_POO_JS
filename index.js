//Arquivo com instancias das classes para vermos o polimorfismo

import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Guilherme","g@g.com","2023-01-03")

const novoDocente = new Docente("Giulia", "giu@giu.com", "2023-01-03")
console.log(novoDocente.exibirInfos())
//Como podemos observar, na classe docente alteramos o valor de role e ela foi alterada ao exibir as infos
// Também chamado de interfaces. Não implementadas no JS apenas no TS