export const CERTIFICATE_DETAIL = "CERTIFICATE_DETAIL";
export const addCertificate = (certificateDetail) => {
  return {
    type: CERTIFICATE_DETAIL,
    certificateDetail,
  };
};
