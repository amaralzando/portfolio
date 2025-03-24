'use server';

import Mensagem from '@/model/Mensagem';
import axios from 'axios';
import https from 'https';

interface WebhookResponse {
	response: string;
}

export default async function conversar(
	chatId: string,
	mensagem: Mensagem,
): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBHOOK;
	if (!webhookUrl) return null;

	const resposta = await axios.post<WebhookResponse[]>( // Alterado para WebhookResponse[]
		webhookUrl,
		{
			chatId,
			mensagem: mensagem.texto,
		},
		{
			httpsAgent: new https.Agent({ rejectUnauthorized: false }),
		},
	);

	console.log(resposta.data[0].response);
	const respostaDoWebhook = resposta.data[0].response;
	return respostaDoWebhook;
}
