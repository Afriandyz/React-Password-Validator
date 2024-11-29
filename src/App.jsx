import { useState } from "react";
import validator from "validator";

const App = () => {
  const [errorMessage, SetErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      SetErrorMessage("Your Password Is Strong");
    } else {
      SetErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <div>
      <form>
        <h2>Checking Password Strength</h2>
        <label htmlFor="">Enter Your Password</label>
        <input type="text" onChange={(e) => validate(e.target.value)} /> <br />
        {errorMessage === "" ? null : <span>{errorMessage}</span>}
      </form>
    </div>
  );
};

export default App;
