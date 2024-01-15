'use client';
//client 방식으로 컴포넌트를 설정해도 초기 한번은 서버쪽에서 렌더링된 다음에 넘어옴
//hyration: 정적인 데이터 일단은 기능없이 미리 서버쪽에서 pre-render(pre-biuld)해서 출력한 다음 클라이언트가 동작할 준비가 되면 그때 클라이언트 기능을 활용할 수 있는 동적인 컴포넌트로 변경처리
//주의점: 서버쪽에서 렌더링된 결과값과 초기 클라이언트에서 동작되는 값이 동일해야됨
//해결방법1: useEffect를 이용해서 컴포넌트가 마운트될때에만 특정 state값을 활성화시키고 해당값이 활성화될때에만 클라이언트에서 활용한 값을 호출하는 방법
//해결방법2: Dinamic import 방식을 활용해서 client 방식으로 동작하는 컴포넌트를 애초에 서버쪽으로 rebuild되지 않도록 처리
import clsx from 'clsx';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react'; //해결방법 1

export default function Navbar({ textArr }) {
	const time = new Date().getTime();
	const pathName = usePathname();
	// const [Client, setClient] = useState(false); //해결방법 1

	// useEffect(() => {
	// 	setClient(true);
	// }, []);

	return (
		<nav className={clsx(styles.navbar)}>
			{/* <h2>{Client && time}</h2> */}
			{textArr.map(txt => (
				<Link key={txt} href={`/${txt}`} className={clsx(pathName === '/' + txt ? styles.on : '')}>
					{txt.charAt(0).toUpperCase() + txt.slice(1)}
				</Link>
			))}
		</nav>
	);
}
