'use client';
import { createContext, useContext, useState } from 'react'; //클라이언트 컴포넌트
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
	console.log('context hook');
	const [MenuOpen, setMenuOpen] = useState(false);

	return <GlobalContext.Provider value={{ MenuOpen, setMenuOpen }}>{children}</GlobalContext.Provider>;
}

export function useGlobalData() {
	const globalData = useContext(GlobalContext);
	return globalData;
}
