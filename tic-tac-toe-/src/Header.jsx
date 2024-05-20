import logo from '../public/game-logo.png'

export default function Header(){
    return(
        <>
        <header>
            <h1>Tic-Tac-Toe</h1>
            <img  src={logo} alt="logo"/>
        </header>
        </>
    )
}