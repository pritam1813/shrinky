import React, { useEffect, useState } from "react";
import "../assets/css/signup.css";
import {
  validateEmail,
  getPasswordStrengthColor,
  validatePassword,
} from "../utils/commonFunctions.ts";
import { INPUT_IDS, STRENGTH_LABELS } from "../utils/constants.ts";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [emailSuggestion, setEmailSuggestion] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordStrengthScore, setPasswordStrengthScore] = useState(-1);
  const [passwordValidationMessage, setPasswordValidationMessage] = useState([
    { validation: 0, message: "" },
  ]);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  useEffect(() => {
    // Checking if all fields are valid
    const isValid =
      !emailError &&
      !confirmPasswordError &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.password !== "" &&
      formData.confirmPassword !== "" &&
      passwordStrengthScore >= 3;

    setIsFormValid(isValid);
  }, [emailError, confirmPasswordError, formData, passwordStrengthScore]);

  const handleInputChange = async (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    try {
      switch (id) {
        case INPUT_IDS.EMAIL:
          // email validation
          const { error, suggestion } = await validateEmail(value);
          setEmailError(error);
          setEmailSuggestion(suggestion);
          break;
        case INPUT_IDS.PASSWORD:
          // Handling password strength and validation
          if (value === "") {
            setPasswordStrength("");
            setPasswordStrengthScore(-1);
            setPasswordValidationMessage([]);
          } else {
            const passwordValidationDetails = validatePassword(value);
            const passwordStrengthScore = 4 - passwordValidationDetails.length;
            setPasswordValidationMessage(passwordValidationDetails);
            setPasswordStrength(STRENGTH_LABELS[passwordStrengthScore]);
            setPasswordStrengthScore(passwordStrengthScore);
          }
          if (formData.confirmPassword.trim() !== "") {
            const confirm_password_error =
              value.trim() !== formData.confirmPassword.trim()
                ? "Passwords do not match"
                : "";
            setConfirmPasswordError(confirm_password_error);
          }
          break;
        case INPUT_IDS.CONFIRM_PASSWORD:
          // Handlinng confirm password validation
          const confirm_password_error =
            value === ""
              ? ""
              : value.trim() !== formData.password.trim()
              ? "Passwords do not match"
              : "";
          setConfirmPasswordError(confirm_password_error);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
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
              onChange={handleInputChange}
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
              onBlur={handleInputChange}
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
              onChange={handleInputChange}
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
                  color: getPasswordStrengthColor(passwordStrengthScore),
                }}
              ></meter>
            )}
            {passwordStrength && (
              <p
                className='margin-top-none'
                style={{
                  color: getPasswordStrengthColor(passwordStrengthScore),
                }}
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
              onChange={handleInputChange}
            />
            {confirmPasswordError && (
              <p className='text-danger'>{confirmPasswordError}</p>
            )}
          </div>
        </div>
        <div className='col sm-10 padding-none margin-bottom-small margin-top-small text-center'>
          <input
            type='button'
            className='paper-btn btn-primary-outline'
            value='Sign Up'
            disabled={!isFormValid}
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
