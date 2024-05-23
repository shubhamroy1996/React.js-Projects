
export default function UserInput({onChange, UserInput}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number"
          required
          defaultValue={UserInput.initialInvestment}
          onChange={(event) => onChange("inputIdentifier", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number"
          required
          defaultValue={UserInput.annualInvestment}
          onChange={(event) => onChange("inputIdentifier", event.target.value)}/>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input type="number"
          defaultValue={UserInput.expectedReturn}
          onChange={(event) => onChange("inputIdentifier", event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number"
          defaultValue={UserInput.duration}
          onChange={(event) => onChange("inputIdentifier", event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
