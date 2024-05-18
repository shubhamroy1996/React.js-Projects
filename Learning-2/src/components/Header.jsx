import logo from "../../assets/components.png";


export default function Header() {
    return (
      <header>
        <img src={logo} alt="logo"/>
        <h1>React Essentials</h1>
      </header>
    );
  }