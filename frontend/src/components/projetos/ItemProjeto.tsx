import { Projeto } from '@core';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjetosProps {
	projeto: Projeto;
}

export default function ItemProjeto(props: ProjetosProps) {
	return (
		<Link href={`/projetos/${props.projeto.id}`}>
			<div className="min-w-64 min-h-64 relative rounded-2xl overflow-hidden border-zinc-800 border-2">
				<Image
					src={props.projeto.imagens[0]}
					alt={props.projeto.nome}
					fill
					objectFit="object-cover"
				/>
			</div>
		</Link>
	);
}
