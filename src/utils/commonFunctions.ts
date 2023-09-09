import passwordValidator from "password-validator";

// Email Validation
export async function validateEmail(email: string) {
  if (email === "") {
    return { error: "", suggestion: "" };
  }

  try {
    const response = await fetch(`https://api.mailcheck.ai/email/${email}`);
    const data = await response.json();

    if (data.status === 400) {
      return { error: data.error, suggestion: "" };
    }

    if (data.disposable) {
      return { error: "Temporary emails are not allowed", suggestion: "" };
    }

    if (data.did_you_mean != null) {
      return { error: "", suggestion: `Did you mean ${data.did_you_mean} ?` };
    }
  } catch (error) {
    console.error(error);
  }

  return { error: "", suggestion: "" };
}

//Password Validation
const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .symbols();

export function validatePassword(password: string) {
  const passwordValidationDetails = passwordSchema.validate(password, {
    details: true,
  });

  if (Array.isArray(passwordValidationDetails)) {
    return passwordValidationDetails;
  } else {
    return [];
  }
}

// Returns Color according to password Strength
export function getPasswordStrengthColor(passwordStrengthScore: number) {
  switch (passwordStrengthScore) {
    case 0:
      return "#a7342d";
    case 1:
      return "orange";
    case 2:
      return "#ddcd45";
    case 3:
      return "#86a361";
    case 4:
      return "green";
    default:
      return "#868e96";
  }
}
