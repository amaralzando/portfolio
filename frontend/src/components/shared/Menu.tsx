'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
	const path = usePathname();

	return (
		<nav className="flex gap-6 ">
			<MenuItem href="/" selecionado={path === '/'}>
				Inicio
			</MenuItem>
			<MenuItem href="/projetos/1" selecionado={path.startsWith('/projeto')}>
				Projetos
			</MenuItem>
			<MenuItem href="http://wa.me/5511953861021" selecionado={false} novaAba={true}>
				Contato
			</MenuItem>
		</nav>
	);
}

function MenuItem(props: {
	href: string;
	children: React.ReactNode;
	selecionado: boolean;
	novaAba?: boolean;
}) {
	return (
		<Link href={props.href} target={props.novaAba ? '_blank' : '_self'}>
			<span
				className={`
          flex items-center gap-2 text-sm border-red-600 hover:text-white
          ${props.selecionado ? 'border-b-2 text-white' : 'text-zinc-500'} 
        `}
			>
				{props.children}
			</span>
		</Link>
	);
}
