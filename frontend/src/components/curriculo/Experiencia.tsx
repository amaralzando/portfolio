export default function Experiencia() {
	return (
		<div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-center p-6 bg-black rounded-2xl border-zinc-800 border-2 justify-around">
			<Item principal="+150" label="paises atendidos" />
			<Item principal="+2" label="anos de experencia" />
			<Item principal="2" label="alunos ensinados" />
		</div>
	);
}

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center gap-2">
			<span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
			<span className="text-zinc-400 text-sm text-center">{props.label}</span>
		</div>
	);
}
