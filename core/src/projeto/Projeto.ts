import Tecnologia from '../tecnologia/Tecnologia'
import { Nivel } from './Nivel'
import { Tipo } from './Tipo'

export default interface Projeto {
	id: number
	nome: string
	descricao: string
	imagns: string[]
	tipo: Tipo
	nivel: Nivel
	repositorio: string
	destacado: boolean
	tecnologias: Tecnologia[]
}
