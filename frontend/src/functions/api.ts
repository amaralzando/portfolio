const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet(url: string) {
	const response = await fetch(normalizeUrl(`${baseURL}/${url}`));
	return response.json();
}

function normalizeUrl(url: string) {
	const protocol = url.split('://')[0];
	const restante = url.split('://')[1];
	return `${protocol}://${restante.replace(/\/{2,}/g, '/')}`;
}
