import { Tecnologia } from '@core';
import { Controller, Get } from '@nestjs/common';
import { TecnologiaPrisma } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
	constructor(private readonly repo: TecnologiaPrisma) {}

	@Get()
	async obterTodasTecnologias(): Promise<Tecnologia[]> {
		return this.repo.obterTodasTecnologias();
	}

	@Get('destaques')
	async obterDestaques(): Promise<Tecnologia[]> {
		return this.repo.obterDestaques();
	}
}
