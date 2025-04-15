import { useContext } from 'react';
import useTheme from '../contexts/Theme';

export default function ThemeBtn(params) {
    const {toggleTheme} = useTheme()
    return(
        <>
            <button onClick={toggleTheme}>TOGGLE BUTTON</button>
        </>
    )
}