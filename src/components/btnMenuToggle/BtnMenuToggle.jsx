'use client';
import { useGlobalData } from '@/hooks/useGlobalData';
import styles from './btnMenuToggle.module.scss';
import { FaBarsStaggered } from 'react-icons/fa6';
// npm i react-icons

export default function BtnMenuToggle() {
	const { MenuOpen, setMenuOpen } = useGlobalData();

	return (
		// 서버사이드 랜더링
		<FaBarsStaggered className={styles.btnMenu} size={20} color={'#333'} onClick={() => setMenuOpen(!MenuOpen)} />
	);
}