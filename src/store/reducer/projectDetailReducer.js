import { Project_DETAIL } from "../action/projectDetailsAction";

const initialState = {
  projectDetail: [],
};

const ProjectDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case Project_DETAIL: {
      return {
        ...state,
        projectDetail: action.projectDetail,
      };
    }
    default: {
      return state;
    }
  }
};
export default ProjectDetailReducer;
