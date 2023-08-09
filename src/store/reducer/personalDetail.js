import {
  UPDATE_ADDRESS,
  UPDATE_EMAIL,
  UPDATE_GITHUB,
  UPDATE_NAME,
  UPDATE_PHONE,
} from "../action/personalDetailActions";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  github: "",
};
const PersonalDetail = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case UPDATE_ADDRESS: {
      return {
        ...state,
        address: action.address,
      };
    }
    case UPDATE_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case UPDATE_PHONE: {
      return {
        ...state,
        phone: action.phone,
      };
    }
    case UPDATE_GITHUB: {
      return {
        ...state,
        github: action.github,
      };
    }
    default: {
      return state;
    }
  }
};
export default PersonalDetail;
