export const validateForm = (store) => {
  const personalDetails = store.getState();
  const name = personalDetails.PersonalDetails.name;
  const email = personalDetails.PersonalDetails.email;
  const githubLink = personalDetails.PersonalDetails.github;
  const mobile = personalDetails.PersonalDetails.phone;
  const address = personalDetails.PersonalDetails.address;
  const errors = {};
  if (!name) {
    errors.name = "Name is required.";
  }

  if (!isValidGitHubLink(githubLink)) {
    errors.github = "Invalid GitHub link.";
  }

  if (!isValidEmail(email)) {
    errors.email = "Invalid email address.";
  }

  if (!isValidIndianMobileNumber(mobile)) {
    errors.phone = "Invalid Indian phone number.";
  }

  if (!isValidAddress(address)) {
    errors.address = "Address should be at least 6 characters long.";
  }

  return errors;
};

function isValidGitHubLink(link) {
  const githubProfileRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+(?:\/)?$/;
  return githubProfileRegex.test(link);
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isValidIndianMobileNumber(number) {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(number);
}

function isValidAddress(address) {
  return address.trim().length > 5;
}
