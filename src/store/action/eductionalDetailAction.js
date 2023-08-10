export const EDUCATIONAL_DETAIL = "EDUCATIONAL_DETAIL";
export const addEducationalDetailAction = (educationDetail) => {
  return {
    type: EDUCATIONAL_DETAIL,
    educationDetail,
  };
};
