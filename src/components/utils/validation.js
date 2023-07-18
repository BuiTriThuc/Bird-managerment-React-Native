export const isValidEmail = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};

export const isValidPhoneNumber = (phoneNumber) => {
  const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  return phonePattern.test(phoneNumber);
};
