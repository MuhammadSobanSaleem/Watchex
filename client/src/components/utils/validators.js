export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) return "Email is required";
  if (!emailRegex.test(value)) return "Invalid email format";
  return "";
};

export const validatePassword = (value) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!value) return "Password is required";
  if (!passwordRegex.test(value))
    return "Password must be at least 8 chars, include uppercase, lowercase, number & special char";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return "Confirm password is required";
  if (password !== confirmPassword) return "Passwords do not match";
  return "";
};
