import Projeto from '../projeto/Projeto';

export default interface Tecnologia {
	id: number;
	nome: string;
	imagem: string;
	descricao: string;
	destaque: boolean;
	projetos?: Projeto[];
}
