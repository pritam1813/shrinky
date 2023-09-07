import React, { useState } from "react";
import "../assets/css/signup.css";
import { validateEmail } from "../utils/commonFunctions.ts";

const INPUT_IDS = {
  NAME: "Name",
  EMAIL: "Email",
  PASSWORD: "Password",
  CONFIRM_PASSWORD: "ConfirmPassword",
};

function Signup() {
  const [emailError, setEmailError] = useState("");
  const [emailSuggestion, setEmailSuggestion] = useState("");

  const handleEmailBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const { error, suggestion } = await validateEmail(email);
    setEmailError(error);
    setEmailSuggestion(suggestion);
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
              type='text'
              id={INPUT_IDS.PASSWORD}
            />
          </div>
        </div>
        <div className='col sm-10 padding-none'>
          <div className='form-group'>
            <label htmlFor={INPUT_IDS.CONFIRM_PASSWORD}>Confirm Password</label>
            <input
              className='input-block'
              type='text'
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
