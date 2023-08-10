export const Project_DETAIL = "Project_DETAIL";
export const addProjectDetails = (projectDetail) => {
  return {
    type: Project_DETAIL,
    projectDetail,
  };
};
