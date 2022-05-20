export const sendEmail = (contactEmail: string | null | undefined) => {
  if (!contactEmail) {
    return;
  }

  window.open(`mailto:${contactEmail}?subject=Tinvesta -`);
};
