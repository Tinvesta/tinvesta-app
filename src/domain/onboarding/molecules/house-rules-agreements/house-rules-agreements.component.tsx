import { Done as DoneIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { CenterBlockLayout } from '@ui';

import { DesktopOnboardingFormLayout } from '../../atoms';
import S from './house-rules-agreements.styles';
import { IHouseRulesAgreementsProps } from './house-rules-agreements.types';

// TODO - select image based on theme
export const HouseRulesAgreements = ({
  isLoading,
  onAgreementButtonClick,
  onBackButtonClick,
}: IHouseRulesAgreementsProps): JSX.Element => (
  <DesktopOnboardingFormLayout
    centerActionButton
    addArrowToBackButton={false}
    backButtonText="I disagree"
    continueButtonText="I Agree"
    isLoading={isLoading}
    onBackButtonClick={onBackButtonClick}
    onSubmit={(event) => {
      event.preventDefault();

      onAgreementButtonClick();
    }}
  >
    <CenterBlockLayout>
      <S.StyledWrapper>
        <S.StyledHeadingWrapper>
          <Image
            priority
            alt="Tinvesta"
            height={50}
            objectFit="scale-down"
            src="/images/brandmark-transparent-white.png"
            width={50}
          />
          <Typography fontWeight={900} variant="body1">
            Welcome to Tinvesta family!
          </Typography>
          <Typography variant="caption">Please follow these house rules</Typography>
        </S.StyledHeadingWrapper>
        <S.StyledHouseRuleWrapper>
          <Typography display="flex" flexDirection="row">
            <S.StyledHouseRuleIcon fontSize="small">
              <DoneIcon />
            </S.StyledHouseRuleIcon>
            <Typography variant="body1">Be yourself</Typography>
          </Typography>
          <Typography variant="caption">
            Make sure your photo and all other informations are true to who you are.
          </Typography>
        </S.StyledHouseRuleWrapper>
        <S.StyledHouseRuleWrapper>
          <Typography display="flex" flexDirection="row">
            <S.StyledHouseRuleIcon fontSize="small">
              <DoneIcon />
            </S.StyledHouseRuleIcon>
            <Typography variant="body1">Respect others</Typography>
          </Typography>
          <Typography variant="caption">
            Respect others and treat them as you would like to be treated.
          </Typography>
        </S.StyledHouseRuleWrapper>
        <S.StyledHouseRuleWrapper>
          <Typography display="flex" flexDirection="row">
            <S.StyledHouseRuleIcon fontSize="small">
              <DoneIcon />
            </S.StyledHouseRuleIcon>
            <Typography variant="body1">Be proactive</Typography>
          </Typography>
          <Typography variant="caption">
            Always report bad behavior or suspicious accounts.
          </Typography>
        </S.StyledHouseRuleWrapper>
      </S.StyledWrapper>
    </CenterBlockLayout>
  </DesktopOnboardingFormLayout>
);
