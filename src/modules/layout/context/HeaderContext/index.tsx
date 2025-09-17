import {
	createContext,
	FC,
	useCallback,
	useState,
	type ReactNode,
} from 'react';

import type { IHeaderContext } from '@modules/layout/context/HeaderContext/interface';

const HeaderContext = createContext<IHeaderContext>({
	isMobileNavMode: false,
	handleMobileNavMode: () => {},
});

const HeaderContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const [isMobileNavMode, setIsMobileNavMode] = useState<boolean>(false);

	const handleMobileNavMode = useCallback((value: boolean) => {
		setIsMobileNavMode(value);
	}, []);

	const headerContext: IHeaderContext = {
		isMobileNavMode,
		handleMobileNavMode,
	};

	return (
		<HeaderContext.Provider value={headerContext}>
			{children}
		</HeaderContext.Provider>
	);
};

export { HeaderContextWrapper, HeaderContext };
