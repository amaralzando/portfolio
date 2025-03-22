import Image from 'next/image';

export default function MiniCV() {
	return (
		<div className="flex-1 bg-black rounded-2xl border-zinc-800 border-2 p-6 flex flex-col-reverse justify-center md:flex-row lg:flex-col-reverse xl:flex-row gap-6 items-center md:items-start lg:items-center xl:items-start">
			<div className="relative min-w-72 h-64">
				<Image
					src="/minha-foto.jpg"
					alt="Foto de perfil de Gabriel Amaral"
					fill
					style={{ objectFit: 'cover', borderRadius: '1rem' }} // Adiciona estilo para cobrir e arredondar a imagem
				/>
			</div>
			<div className="flex flex-col gap-5 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text">
						Gabriel Amaral
					</h2>
					<span className="text-gray-400">CEO da GasaTec e Desenvolvedor Fullstack</span>
				</div>
				<p className="text-sm text-gray-300 text-center md:text-left lg:text-center xl:text-left">
					Com mais de 2 anos de experiência em desenvolvimento fullstack, Gabriel lidera a
					GasaTec como CEO, aplicando habilidades em construção de aplicações completas e
					gerenciamento de projetos. Sua paixão por soluções eficientes e de alta
					qualidade impulsiona sua busca contínua por aprimoramento.
				</p>
			</div>
		</div>
	);
}
