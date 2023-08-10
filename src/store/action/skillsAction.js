export const SKILL = "SKILL";
export const addSkills = (skill) => {
  return {
    type: SKILL,
    skill,
  };
};
