import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { ERoutes } from '@enums';

import S from './full-screen-menu.styles';
import { IFullScreenMenuProps } from './full-screen-menu.types';

const links = [
  { name: 'Privacy & policy', to: ERoutes.PRIVACY_POLICY, id: 1 },
  { name: 'Terms & conditions', to: ERoutes.TERMS, id: 2 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
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

export const FullScreenMenu = ({ open }: IFullScreenMenuProps): JSX.Element => (
  <S.StyledWrapper>
    <AnimatePresence>
      {open && (
        <S.StyledAside
          animate={{
            zIndex: 15,
            width: '100%',
            height: '100%',
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          initial={{ width: 0 }}
        >
          <S.StyledLinksContainer
            animate="open"
            exit="closed"
            initial="closed"
            variants={sideVariants}
          >
            {links.map(({ id, name, to }) => (
              <Link key={id} href={to}>
                <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }}>
                  <S.StyledLinkTypography variant="h3">{name}</S.StyledLinkTypography>
                </motion.div>
              </Link>
            ))}
          </S.StyledLinksContainer>
        </S.StyledAside>
      )}
    </AnimatePresence>
  </S.StyledWrapper>
);
