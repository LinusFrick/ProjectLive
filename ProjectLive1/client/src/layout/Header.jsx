import {Link} from 'react-router-dom'
import "../styles/header.css"

export default function () {
    return <>
        <header>
            <h1>
                <Link to="/">Projekt Live Rock</Link>
            </h1>
        </header>
    </>
}