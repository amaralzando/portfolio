'use client';

import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(chave: string, valorInicial: T) {
	const [valor, setValor] = useState<T>(() => {
		const valorLocal = localStorage.getItem(chave);
		if (valorLocal === null) {
			return valorInicial;
		}
		try {
			return JSON.parse(valorLocal);
		} catch (error) {
			console.error(`Erro ao fazer parse de JSON para a chave ${chave}:`, error);
			return valorInicial; // Retorna o valor inicial em caso de erro
		}
	});

	useEffect(() => {
		localStorage.setItem(chave, JSON.stringify(valor));
	}, [chave, valor]);

	return [valor, setValor] as const;
}
