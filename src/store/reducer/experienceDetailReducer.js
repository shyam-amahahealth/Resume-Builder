import { EXPERIENCE_DETAIL } from "../action/experienceDetailAction";

const initialState = {
  experienceDetails: [],
};

const ExperienceDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPERIENCE_DETAIL: {
      return {
        ...state,
        experienceDetails: action.experienceDetails,
      };
    }
    default: {
      return state;
    }
  }
};
export default ExperienceDetailReducer;
