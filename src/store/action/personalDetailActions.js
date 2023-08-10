export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_PHONE = "UPDATE_PHONE";
export const UPDATE_GITHUB = "UPDATE_GITHUB";
export const UPDATE_ABOUT = "UPDATE_ABOUT";
export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    name,
  };
};
export const updateEmail = (email) => {
  return {
    type: UPDATE_EMAIL,
    email,
  };
};

export const updateAddress = (address) => {
  return {
    type: UPDATE_ADDRESS,
    address,
  };
};
export const updatePhone = (phone) => {
  return {
    type: UPDATE_PHONE,
    phone,
  };
};

export const updateGithub = (github) => {
  return {
    type: UPDATE_GITHUB,
    github,
  };
};
export const updateAbout = (about) => {
  return {
    type: UPDATE_ABOUT,
    about,
  };
};
