import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {

  const [UserInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 10,
    duration: 5,
  });

  const checkValidInput = UserInputs.duration >= 1;
  console.log(checkValidInput);

  function handleChange(inputIdentifier, newValue) {
    setUserInputs((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput UserInput={UserInputs} onChange={handleChange} />
      {!checkValidInput && (
        <p className="center">Please enter valid input data</p>
      )}
      {checkValidInput && <Results input={UserInputs} />}
    </>
  );
}

export default App;
