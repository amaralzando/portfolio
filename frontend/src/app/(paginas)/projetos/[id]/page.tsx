import Readme from '@/components/projetos/Readme';
import CarrosselImagens from '@/components/shared/CarrosselImagens';
import Container from '@/components/shared/Container';
import ConteudoMD from '@/components/shared/ConteudoMD';
import Header from '@/components/shared/Header';
import Tecnologias from '@/components/tecnologias/tecnologias';
import { obterReadme } from '@/functions/github';
import { obterProjetoById } from '@/functions/projetos';

export default async function PageProject(prop: { params: Promise<{ id: number }> }) {
	const { id } = await prop.params;
	const projeto = await obterProjetoById(id);
	if (!projeto) return null;
	const readme = await obterReadme(projeto?.repositorio);

	return projeto ? (
		<div className=" bg-black">
			<Header />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias lista={projeto.tecnologias} tamanhoMenor />
				<Readme markdown={readme} />
			</Container>
		</div>
	) : null;
}
