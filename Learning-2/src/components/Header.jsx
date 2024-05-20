import logo from "../../assets/components.png";

const reactDescriptions = ['Fundamental','Core' ,'Crucial']

export default function Header() {

    function genRandomInt(max) {
      let random = Math.floor(Math.random()*(max+1))
      return random
    }

    return (
      <header>
        <img src={logo} alt="logo"/>
        <h1>React Essentials</h1>
        <p>
        <b>{reactDescriptions[genRandomInt(2)]}</b> React concepts you will need for almost any app you are
        going to build
      </p>

      </header>
    );
  }