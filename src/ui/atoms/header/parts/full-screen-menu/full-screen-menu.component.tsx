import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { useDeviceDetect, useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { itemVariants, sideVariants, translationStrings } from './full-screen-menu.defaults';
import S from './full-screen-menu.styles';
import { IFullScreenMenuProps } from './full-screen-menu.types';

export const FullScreenMenu = ({ open, toggleMenu }: IFullScreenMenuProps): JSX.Element => {
  const translations = useTranslation(translationStrings);
  const { deviceData } = useDeviceDetect();

  const links = [
    { name: translations.componentFooterLinksOptionOne, to: ERoutes.HOME },
    { name: translations.componentFooterLinksOptionTwo, to: ERoutes.PRIVACY_POLICY },
    { name: translations.componentFooterLinksOptionThree, to: ERoutes.TERMS },
  ];

  const handleLinkClick = (isActive: boolean) => () => !isActive && toggleMenu();

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
              {links.map(({ name, to }) => {
                const isActive = window.location.pathname === to;
                const whileHover = !isActive ? { scale: 1.1 } : undefined;

                return (
                  <Link key={to} href={to}>
                    <motion.div variants={itemVariants} whileHover={whileHover}>
                      <S.StyledLinkTypography
                        active={isActive.toString()}
                        color={isActive ? 'gray' : 'secondary'}
                        variant={deviceData.isSmallerThanMD ? 'h4' : 'h3'}
                        onClick={handleLinkClick(isActive)}
                      >
                        {name}
                      </S.StyledLinkTypography>
                    </motion.div>
                  </Link>
                );
              })}
            </S.StyledLinksContainer>
          </S.StyledAside>
        )}
      </AnimatePresence>
    </S.StyledWrapper>
  );
};
