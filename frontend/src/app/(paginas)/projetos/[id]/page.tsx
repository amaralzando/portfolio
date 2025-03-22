import Header from '@/components/shared/Header';
import { obterProjetoById } from '@/functions/projetos';

export default async function PageProject(prop: { params: Promise<{ id: number }> }) {
	const { id } = await prop.params;
	const projeto = await obterProjetoById(id);
	console.log(projeto);

	return projeto ? (
		<div className=" bg-black">
			<Header />
			<div>
				<h1>{projeto.nome}</h1>
			</div>
		</div>
	) : null;
}
