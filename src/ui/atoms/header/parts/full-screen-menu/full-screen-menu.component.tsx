import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useDeviceDetect } from 'use-device-detect';

import { useTranslation } from '@utils';

import { ERoutes } from '@enums';

import { itemVariants, sideVariants, translationStrings } from './full-screen-menu.defaults';
import S from './full-screen-menu.styles';
import { IFullScreenMenuProps } from './full-screen-menu.types';

export const FullScreenMenu = ({ open, toggleMenu }: IFullScreenMenuProps): JSX.Element => {
  const router = useRouter();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const links = [
    { name: translations.componentFooterLinksOptionOne, to: ERoutes.HOME },
    { name: translations.componentFooterLinksOptionTwo, to: ERoutes.PRIVACY_POLICY },
    { name: translations.componentFooterLinksOptionThree, to: ERoutes.TERMS },
  ];

  const handleLinkClick = (to: string, isActive: boolean) => () => {
    if (!isActive) {
      toggleMenu();

      setTimeout(() => router.push(to), 1000);
    }
  };

  const getLinkVariant = () => {
    if (deviceData.isSmallerThanXS) {
      return 'h5';
    }

    return deviceData.isSmallerThanMD ? 'h4' : 'h3';
  };

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
                const whileHover = isActive ? undefined : { scale: 1.1 };

                return (
                  <motion.div key={to} variants={itemVariants} whileHover={whileHover}>
                    <S.StyledLinkTypography
                      active={isActive.toString()}
                      color={isActive ? 'gray' : 'secondary'}
                      variant={getLinkVariant()}
                      onClick={handleLinkClick(to, isActive)}
                    >
                      {name}
                    </S.StyledLinkTypography>
                  </motion.div>
                );
              })}
            </S.StyledLinksContainer>
          </S.StyledAside>
        )}
      </AnimatePresence>
    </S.StyledWrapper>
  );
};
