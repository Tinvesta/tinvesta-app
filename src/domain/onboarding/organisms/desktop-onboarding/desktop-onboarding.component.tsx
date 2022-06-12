import { useMachine } from '@xstate/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { Loading } from '@ui';

import { useConfirmationModal, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { createProfileAction } from '../../api';
import {
  DesktopHouseRulesAgreements,
  DesktopOnboardingStepFiveInvestor,
  DesktopOnboardingStepFiveStartup,
  DesktopOnboardingStepFourInvestor,
  DesktopOnboardingStepFourStartup,
  DesktopOnboardingStepOne,
  DesktopOnboardingStepThreeInvestor,
  DesktopOnboardingStepThreeStartup,
  DesktopOnboardingStepTwo,
} from '../../molecules';
import {
  IDesktopOnboardingStepFiveInvestorData,
  IDesktopOnboardingStepFiveStartupData,
  IDesktopOnboardingStepFourInvestorData,
  IDesktopOnboardingStepFourStartupData,
  IDesktopOnboardingStepOneData,
  IDesktopOnboardingStepThreeInvestorData,
  IDesktopOnboardingStepThreeStartupData,
  IDesktopOnboardingStepTwoData,
} from '../../onboarding.types';
import { translationStrings } from './desktop-onboarding.defaults';
import { IDesktopOnboardingProps } from './desktop-onboarding.types';
import {
  EDesktopOnboardingMachineAdditionalEvents,
  EDesktopOnboardingMachineEvents,
  EDesktopOnboardingMachineStates,
  onboardingStateMachine,
} from './machines';

export const DesktopOnboarding = ({
  clientTypes,
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
  userRef,
}: IDesktopOnboardingProps): JSX.Element => {
  const router = useRouter();
  const { confirm } = useConfirmationModal();
  const translations = useTranslation(translationStrings);
  const { isLoading: isProfileLoading, user } = useUser();

  const { isLoading: isCreateAccountActionLoading, mutateAsync: mutateAsyncCreateAccountAction } =
    useMutation(createProfileAction);

  const [current, send] = useMachine(onboardingStateMachine);

  useEffect(() => {
    if (!isProfileLoading && user?.contact_email) {
      send({
        type: EDesktopOnboardingMachineAdditionalEvents.SET_PROFILE_DATA_FROM_SUPABASE,
        fullName: user.user_metadata.full_name,
        contactEmail: user.contact_email,
      });
    }
  }, [isProfileLoading, user?.contact_email]);

  const onContinueButtonClick = (
    data:
      | IDesktopOnboardingStepOneData
      | IDesktopOnboardingStepTwoData
      | IDesktopOnboardingStepThreeStartupData
      | IDesktopOnboardingStepThreeInvestorData
      | IDesktopOnboardingStepFourInvestorData
      | IDesktopOnboardingStepFourStartupData
      | IDesktopOnboardingStepFiveInvestorData
      | IDesktopOnboardingStepFiveStartupData,
  ) => send({ type: EDesktopOnboardingMachineEvents.NEXT, data });

  const onAcceptHouseRulesAgreements = () =>
    mutateAsyncCreateAccountAction({ ...current.context, userRef })
      .then(() => {
        toast.success(translations.componentOnboardingCommonSuccessToastMessage);

        setTimeout(() => router.push(ERoutes.DASHBOARD), 2000);
      })
      .catch(() => toast.error(translations.commonErrorsSomethingWentWrong));

  const onBackButtonClick = () => send(EDesktopOnboardingMachineEvents.BACK);

  const onFirstStepBackButtonClick = () =>
    confirm({
      title: translations.commonPromptUnsavedTitle,
      cancellationText: translations.commonButtonsCancel,
      confirmationText: translations.commonButtonsContinue,
      description: translations.commonPromptUnsavedDescription,
    }).then(() => router.push(ERoutes.HOME));

  if (isProfileLoading || !user?.contact_email || current.context.stepOneData.contactEmail === '') {
    return (
      <Loading>
        <Image
          priority
          alt="Tinvesta"
          layout="fill"
          objectFit="cover"
          src="/images/background/desktop-onboarding.svg"
        />
      </Loading>
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_ONE)) {
    return (
      <DesktopOnboardingStepOne
        defaultValues={current.context.stepOneData}
        onBackButtonClick={onFirstStepBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_TWO)) {
    return (
      <DesktopOnboardingStepTwo
        clientTypes={clientTypes}
        defaultValues={current.context.stepTwoData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  // STARTUP PATH
  if (current.matches(EDesktopOnboardingMachineStates.STEP_THREE_STARTUP)) {
    return (
      <DesktopOnboardingStepThreeStartup
        defaultValues={current.context.stepThreeStartupData}
        focusMarkets={focusMarkets}
        industrialSectors={industrialSectors}
        startupProfileCreatorTypes={startupProfileCreatorTypes}
        startupSectors={startupSectors}
        teamSizes={teamSizes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FOUR_STARTUP)) {
    return (
      <DesktopOnboardingStepFourStartup
        defaultValues={current.context.stepFourStartupData}
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FIVE_STARTUP)) {
    return (
      <DesktopOnboardingStepFiveStartup
        defaultValues={current.context.stepFiveStartupData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  // INVESTOR PATH
  if (current.matches(EDesktopOnboardingMachineStates.STEP_THREE_INVESTOR)) {
    return (
      <DesktopOnboardingStepThreeInvestor
        defaultValues={current.context.stepThreeInvestorData}
        focusMarkets={focusMarkets}
        industrialSectors={industrialSectors}
        investorProfileTypes={investorProfileTypes}
        startupSectors={startupSectors}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FOUR_INVESTOR)) {
    return (
      <DesktopOnboardingStepFourInvestor
        defaultValues={current.context.stepFourInvestorData}
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        teamSizes={teamSizes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FIVE_INVESTOR)) {
    return (
      <DesktopOnboardingStepFiveInvestor
        defaultValues={current.context.stepFiveInvestorData}
        investorDemandTypes={investorDemandTypes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  return (
    <DesktopHouseRulesAgreements
      isLoading={isCreateAccountActionLoading}
      onAgreementButtonClick={onAcceptHouseRulesAgreements}
      onBackButtonClick={onBackButtonClick}
    />
  );
};
