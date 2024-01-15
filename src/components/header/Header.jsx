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

// https://velog.io/@fervor_dev/Next.js-usePathname-useSearchParams
// 'use client'; 짝꿍 +
// import { usePathname } from 'next/navigation';
// usePathname: 현재 url을 확인할 수 있는 훅, 쿼리스트링 값은 제외하고 가져옴, 동적라우팅

export default function Header() {
	console.log('header');

	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>
			<Navbar textArr={['about', 'youtube', 'post']} />
			<BtnLogin session={true} /> {/* 서버사이드 랜더링 */}
			<FaBarsStaggered className={clsx(styles.btnMenu)} size={'20'} color={'#333'} /> {/* 서버사이드 랜더링 */}
		</header>
	);
}
