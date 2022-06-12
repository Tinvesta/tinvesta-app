export const translationStrings = [
  'component.footer.links.option.one',
  'component.footer.links.option.two',
  'component.footer.links.option.three',
] as const;

export const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

export const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
