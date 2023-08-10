import { CERTIFICATE_DETAIL } from "../action/certificateDetailAction";

const initialState = {
  certificateDetail: [],
};

const CertificateDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERTIFICATE_DETAIL: {
      return {
        ...state,
        certificateDetail: action.certificateDetail,
      };
    }
    default: {
      return state;
    }
  }
};
export default CertificateDetailReducer;
