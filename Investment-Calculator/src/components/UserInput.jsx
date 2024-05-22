import { useState } from "react";

export default function UserInput() {

    const [UserInput, setUserInput] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 10,
        duration : 5,
    })

    function handleUserInputChange(inputIdentifier,newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput, [inputIdentifier]: newValue
            }
        })
    }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number"
          required
          defaultValue={UserInput.initialInvestment}
          onChange={(event) => handleUserInputChange("inputIdentifier", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number"
          required
          defaultValue={UserInput.annualInvestment}
          onChange={(event) => handleUserInputChange("inputIdentifier", event.target.value)}/>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input type="number"
          defaultValue={UserInput.expectedReturn}
          onChange={(event) => handleUserInputChange("inputIdentifier", event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number"
          defaultValue={UserInput.duration}
          onChange={(event) => handleUserInputChange("inputIdentifier", event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
