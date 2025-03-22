import { Projeto } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodosProjetos(): Promise<Projeto[]> {
		const projetos = await this.prisma.projetos.findMany();
		return ajustarImagensProjetos(projetos);
	}

	async obterPorId(id: number): Promise<Projeto | null> {
		const projeto = await this.prisma.projetos.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				tecnologias: true,
			},
		});
		console.log(projeto);

		return ajustarImagensProjeto(projeto);
	}
}

function ajustarImagensProjetos(projetos: any[]): any[] {
	return projetos.map((projeto) => ajustarImagensProjeto(projeto));
}

function ajustarImagensProjeto(projeto: any): any {
	if (projeto && projeto.imagens && projeto.imagens.length > 0) {
		const imagens = JSON.parse(projeto.imagens[0]);
		projeto.imagens = imagens;
	}
	return projeto;
}
