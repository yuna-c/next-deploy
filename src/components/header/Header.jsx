import clsx from 'clsx';
import styles from './header.module.scss';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import BtnLogin from '../btnLogin/BtnLogin';
import { FaBarsStaggered } from 'react-icons/fa6';
import dynamic from 'next/dynamic';

// npm i react-icons
// 기존 clinet 방식의 컴포넌트를 import 시 ssr: false를 통해 서버쪽에서 pre-build되지 않도록 설정
// const NoSsrNavbar = dynamic(() => import('@/components/navbar/Navbar'), { ssr: false }); //ssr 서버사이드 랜더링 방식: false

export default function Header() {
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>

			<Navbar textArr={['about', 'youtube', 'post']} />
			<BtnLogin session={true} />
			<FaBarsStaggered className={clsx(styles.btnMenu)} size={'20'} color={'#333'} />
		</header>
	);
}
