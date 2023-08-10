import { EDUCATIONAL_DETAIL } from "../action/eductionalDetailAction";

const initialState = {
  educationDetail: [],
};

const EducationalDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDUCATIONAL_DETAIL: {
      return {
        ...state,
        educationDetail: action.educationDetail,
      };
    }
    default: {
      return state;
    }
  }
};
export default EducationalDetailReducer;
