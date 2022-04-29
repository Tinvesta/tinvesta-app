import { useTranslation } from '@utils';

import { HouseRulesAgreementsContent, MobileOnboardingFormLayout } from '../../atoms';
import { translationStrings } from './mobile-house-rules-agreements.defaults';
import { IMobileHouseRulesAgreementsProps } from './mobile-house-rules-agreements.types';

export const MobileHouseRulesAgreements = ({
  isLoading,
  onAgreementButtonClick,
  onBackButtonClick,
}: IMobileHouseRulesAgreementsProps): JSX.Element => {
  const translations = useTranslation(translationStrings);

  return (
    <MobileOnboardingFormLayout
      columnSpacing={0}
      continueButtonText={translations.commonButtonsAgree}
      currentStep={10}
      isLoading={isLoading}
      rowSpacing={0}
      onBackButtonClick={onBackButtonClick}
      onSubmit={(event) => {
        event.preventDefault();

        onAgreementButtonClick();
      }}
    >
      <HouseRulesAgreementsContent />
    </MobileOnboardingFormLayout>
  );
};
