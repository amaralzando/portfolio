import { Tecnologia } from '@core';

export interface TecnologiasTrabalhadasProps {
	lista: Tecnologia[];
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.lista ? (
		<div className="flex justify-center items-center p-6 lg:w-80 bg-black rounded-2xl border-zinc-800 border-2">
			<div className="flex flex-wrap justify-center gap-1 items-center">
				{props.lista.map((tecnologia) => (
					<div
						key={tecnologia.id}
						className="flex flex-wrap items-center justify-center  gap-1 "
					>
						<span className="text-red-500 font-bold">#</span>
						<span className="text-sm">{tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : null;
}
