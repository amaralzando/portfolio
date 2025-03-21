import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
	title: 'Portifolio - Gabriel Amarl',
	description: 'Portifolio de projetos de desenvolvimento',
};

const font = Montserrat({
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${font.className} antialiased`}>{children}</body>
		</html>
	);
}
