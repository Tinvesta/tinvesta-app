import { useTranslation } from '@utils';

import { DesktopOnboardingFormLayout, HouseRulesAgreementsContent } from '../../atoms';
import { translationStrings } from './desktop-house-rules-agreements.defaults';
import { IDesktopHouseRulesAgreementsProps } from './desktop-house-rules-agreements.types';

export const DesktopHouseRulesAgreements = ({
  isLoading,
  onAgreementButtonClick,
  onBackButtonClick,
}: IDesktopHouseRulesAgreementsProps): JSX.Element => {
  const translations = useTranslation(translationStrings);

  return (
    <DesktopOnboardingFormLayout
      centerActionButtons
      addArrowToBackButton={false}
      backButtonText={translations.commonButtonsDisagree}
      continueButtonText={translations.commonButtonsAgree}
      isLoading={isLoading}
      onBackButtonClick={onBackButtonClick}
      onSubmit={(event) => {
        event.preventDefault();

        onAgreementButtonClick();
      }}
    >
      <HouseRulesAgreementsContent />
    </DesktopOnboardingFormLayout>
  );
};
