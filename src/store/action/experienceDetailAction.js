export const EXPERIENCE_DETAIL = "EXPERIENCE_DETAIL";
export const addExperienceDetailAction = (experienceDetails) => {
  return {
    type: EXPERIENCE_DETAIL,
    experienceDetails,
  };
};
