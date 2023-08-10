import { SKILL } from "../action/skillsAction";

const initialState = {
  skill: [],
};

const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILL: {
      return {
        ...state,
        skill: action.skill,
      };
    }
    default: {
      return state;
    }
  }
};
export default skillReducer;
