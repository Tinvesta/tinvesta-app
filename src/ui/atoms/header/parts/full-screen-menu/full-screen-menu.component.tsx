import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { translationStrings } from './full-screen-menu.defaults';
import S from './full-screen-menu.styles';
import { IFullScreenMenuProps } from './full-screen-menu.types';

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

export const FullScreenMenu = ({ open, toggleMenu }: IFullScreenMenuProps): JSX.Element => {
  const translations = useTranslation(translationStrings);

  const links = [
    { name: translations.componentFooterLinksOptionOne, to: ERoutes.HOME },
    { name: translations.componentFooterLinksOptionTwo, to: ERoutes.PRIVACY_POLICY },
    { name: translations.componentFooterLinksOptionThree, to: ERoutes.TERMS },
  ];

  return (
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
              {links.map(({ name, to }) => (
                <Link key={to} href={to}>
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }}>
                    <S.StyledLinkTypography variant="h3" onClick={toggleMenu}>
                      {name}
                    </S.StyledLinkTypography>
                  </motion.div>
                </Link>
              ))}
            </S.StyledLinksContainer>
          </S.StyledAside>
        )}
      </AnimatePresence>
    </S.StyledWrapper>
  );
};
