import clsx from 'clsx';
import styles from './header.module.scss';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import dynamic from 'next/dynamic';

const NoSsrNavbar = dynamic(() => import('@/components/navbar/Navbar'), { ssr: false }); //ssr 서버사이드 랜더링 방식: false

export default function Header() {
	console.log('header');

	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>

			{/* <Navbar textArr={['about', 'youtube', 'post']} /> */}
			<NoSsrNavbar textArr={['about', 'youtube', 'post']} />
		</header>
	);
}
