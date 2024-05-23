import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";
function App() {

  const [UserInputs, setUserInputs] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 10,
    duration : 15,
})

const checkValidInput = UserInput.duration >=1

function handleChange(inputIdentifier,newValue) {
    setUserInputs((prevUserInput) => {
        return {
            ...prevUserInput, [inputIdentifier]: +newValue
          }
        })
        console.log(newValue)
}

  return (
    <>
    <Header/>
    <UserInput UserInput={UserInputs} onChange={handleChange}/>
    {/* {checkValidInput && <Results input={UserInputs} />} */}
    <Results input={UserInputs} />
    </>
  )
}

export default App
