import Curriculo from '@/components/curriculo/Index';
import Main from '@/components/landing/Main';
import Projetos from '@/components/projetos/projetos';
import Container from '@/components/shared/Container';
import { obterProjetos } from '@/functions/projetos';
import { obterTecnologias } from '@/functions/tecnologias';

export default async function Home() {
	const tecnologias = await obterTecnologias();
	const projetos = await obterProjetos();

	return (
		<div>
			<Main tecnologias={tecnologias.destaques} />
			<Container className="py-16 flex flex-col items-center gap-10 ">
				<Projetos titulo="Destaques" lista={projetos.destaques} />
				<Projetos titulo="Web" lista={projetos.web} />
				<Projetos titulo="Mobile" lista={projetos.mobile} />
				<Projetos titulo="Jogos" lista={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	);
}
