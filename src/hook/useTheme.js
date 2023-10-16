import { useContext } from 'react';
import { ThemeContext } from '../contexts/themecontext';

const useTheme = () => {
    const { theme, toggle, dark } = useContext(ThemeContext);

    return { theme, toggle, dark };
};

export default useTheme;
