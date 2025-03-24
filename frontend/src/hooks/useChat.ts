'use client';

import conversar from '@/functions/chat';
import Mensagem from '@/model/Mensagem';
import { Id } from '@core';
import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useChat() {
	const [chatId] = useLocalStorage<string>('chatId', Id.gerar());
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>('mensagens', []);
	const [pensando, setPesando] = useState(false);

	async function adicionarMensagem(texto: string) {
		try {
			setPesando(true);

			const novaMensagem: Mensagem = {
				id: Id.gerar(),
				texto,
				autor: 'Visitante',
				lado: 'direito',
				icone: null,
			};

			setMensagens((msgs) => [...msgs, novaMensagem]);

			const resposta = await conversar(chatId, novaMensagem);

			if (typeof resposta === 'string') {
				const mensagemReposta: Mensagem = {
					id: Id.gerar(),
					texto: resposta,
					autor: 'Assistente',
					lado: 'esquerdo',
					icone: null,
				};

				console.log('msgResp', mensagemReposta);
				setMensagens((msgs) => [...msgs, mensagemReposta]);
			} else {
				const mensagemErro: Mensagem = {
					id: Id.gerar(),
					texto: 'Desculpe, não consegui obter uma resposta.',
					autor: 'Assistente',
					lado: 'esquerdo',
					icone: null,
				};
				setMensagens((msgs) => [...msgs, mensagemErro]);
			}
		} catch (error) {
			console.log('Erros mensagem chat');
		} finally {
			setPesando(false);
		}
	}

	function limparMensagens() {
		setMensagens([]);
	}

	return {
		chatId,
		mensagens,
		pensando,
		adicionarMensagem,
		limparMensagens,
	};
}
