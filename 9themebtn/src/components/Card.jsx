import { useContext } from 'react'
import useTheme from '../contexts/Theme'

export default function Card() {
    const {themeMode} = useTheme();

    return (
        <h1 className={`${themeMode}`}>YOUR CARD</h1>
    )
}