import React, { useState } from "react";
import "../assets/css/signup.css";
import { validateEmail } from "../utils/commonFunctions.ts";
import passwordValidator from "password-validator";

const INPUT_IDS = {
  NAME: "Name",
  EMAIL: "Email",
  PASSWORD: "Password",
  CONFIRM_PASSWORD: "ConfirmPassword",
};

const passwordSchema = new passwordValidator();

// rules
passwordSchema
  .is()
  .min(8) // Minimum length of 8 characters
  .has()
  .uppercase() // Requires at least one uppercase letter
  .has()
  .lowercase() // Requires at least one lowercase letter
  .has()
  .digits() // Requires at least one digit
  .has()
  .symbols(); // Requires at least one special character

function Signup() {
  const [emailError, setEmailError] = useState("");
  const [emailSuggestion, setEmailSuggestion] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordStrengthScore, setPasswordStrengthScore] = useState(-1);
  const [passwordValidationMessage, setPasswordValidationMessage] = useState([
    { validation: 0, message: "" },
  ]);

  const handleEmailBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const { error, suggestion } = await validateEmail(email);
    setEmailError(error);
    setEmailSuggestion(suggestion);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    if (password == "") {
      setPasswordStrength("");
      setPasswordStrengthScore(-1);
      setPasswordValidationMessage([]);
      return;
    }
    const passwordRule = passwordSchema.validate(password, {
      details: true,
    });

    let passwordStrengthScore = 0;

    if (Array.isArray(passwordRule)) {
      setPasswordValidationMessage(passwordRule);
      passwordStrengthScore = Math.max(4 - passwordRule.length, 0);
    } else {
      setPasswordValidationMessage([]);
    }

    const strengthLabels = [
      "Very Weak",
      "Weak",
      "Fair",
      "Strong",
      "Very Strong",
    ];
    setPasswordStrength(strengthLabels[passwordStrengthScore]);
    setPasswordStrengthScore(passwordStrengthScore);
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrengthScore) {
      case 0:
        return "#a7342d"; // Very Weak
      case 1:
        return "orange"; // Weak
      case 2:
        return "#ddcd45"; // Fair
      case 3:
        return "#86a361"; // Strong
      case 4:
        return "green"; // Very Strong
      default:
        return "#868e96";
    }
  };

  return (
    <div className='paper sm-10 md-7 lg-4 form-container'>
      <div className='row justify-center'>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor={INPUT_IDS.NAME}>Name</label>
            <input
              className='input-block'
              placeholder='John Doe'
              type='text'
              id={INPUT_IDS.NAME}
            />
          </div>
        </div>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor={INPUT_IDS.EMAIL}>Email</label>
            <input
              className='input-block'
              placeholder='abc@gmail.com'
              type='text'
              id={INPUT_IDS.EMAIL}
              onBlur={handleEmailBlur}
            />
            {emailError && <p className='text-danger'>{emailError}</p>}
            {emailSuggestion && (
              <p className='text-secondary'>{emailSuggestion}</p>
            )}
          </div>
        </div>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor={INPUT_IDS.PASSWORD}>Password</label>
            <input
              className='input-block'
              type='password'
              id={INPUT_IDS.PASSWORD}
              onChange={handlePasswordChange}
            />
            {passwordStrengthScore >= 0 && (
              <meter
                value={passwordStrengthScore}
                min={0}
                max={4}
                low={2}
                high={3}
                optimum={4}
                style={{
                  width: "100%",
                  height: "10px",
                  color: getPasswordStrengthColor(),
                }}
              ></meter>
            )}
            {passwordStrength && (
              <p
                className='margin-top-none'
                style={{ color: getPasswordStrengthColor() }}
              >
                {passwordStrength}
              </p>
            )}
            {passwordValidationMessage.map((rule) => (
              <p key={rule.validation} className='text-danger margin-none'>
                {rule.message}
              </p>
            ))}
          </div>
        </div>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor={INPUT_IDS.CONFIRM_PASSWORD}>Confirm Password</label>
            <input
              className='input-block'
              type='password'
              id={INPUT_IDS.CONFIRM_PASSWORD}
            />
          </div>
        </div>
        <div className='col sm-10 padding-none margin-bottom-small margin-top-small text-center'>
          <input
            type='button'
            className='paper-btn btn-primary-outline'
            value='Sign Up'
          />
        </div>
        <div className='col sm-10 padding-none margin-top-small text-center'>
          Already Have An Account ? <a href='#'>Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
