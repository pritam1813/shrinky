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
