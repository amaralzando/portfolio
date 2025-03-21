import { Projeto } from '@core';
import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoPrisma } from './projeto.prisma';

@Controller('projetos')
export class ProjetoController {
	constructor(private readonly repo: ProjetoPrisma) {}

	@Get()
	async obterTodosProjetos(): Promise<Projeto[]> {
		return this.repo.obterTodosProjetos();
	}

	@Get(':id')
	async obterPorId(@Param('id') id: number): Promise<Projeto | null> {
		return this.repo.obterPorId(id);
	}
}
