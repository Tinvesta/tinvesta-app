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
  MobileHouseRulesAgreements,
  MobileOnboardingStepEightInvestor,
  MobileOnboardingStepEightStartup,
  MobileOnboardingStepFiveInvestor,
  MobileOnboardingStepFiveStartup,
  MobileOnboardingStepFour,
  MobileOnboardingStepNineInvestor,
  MobileOnboardingStepNineStartup,
  MobileOnboardingStepOne,
  MobileOnboardingStepSevenInvestor,
  MobileOnboardingStepSevenStartup,
  MobileOnboardingStepSixInvestor,
  MobileOnboardingStepSixStartup,
  MobileOnboardingStepThree,
  MobileOnboardingStepTwo,
} from '../../molecules';
import {
  IMobileOnboardingStepEightInvestorData,
  IMobileOnboardingStepEightStartupData,
  IMobileOnboardingStepFiveInvestorData,
  IMobileOnboardingStepFiveStartupData,
  IMobileOnboardingStepFourData,
  IMobileOnboardingStepNineInvestorData,
  IMobileOnboardingStepNineStartupData,
  IMobileOnboardingStepOneData,
  IMobileOnboardingStepSevenInvestorData,
  IMobileOnboardingStepSevenStartupData,
  IMobileOnboardingStepSixInvestorData,
  IMobileOnboardingStepSixStartupData,
  IMobileOnboardingStepThreeData,
  IMobileOnboardingStepTwoData,
} from '../../onboarding.types';
import {
  EMobileOnboardingMachineAdditionalEvents,
  EMobileOnboardingMachineEvents,
  EMobileOnboardingMachineStates,
  onboardingStateMachine,
} from './machines';
import { translationStrings } from './mobile-onboarding.defaults';
import { IMobileOnboardingProps } from './mobile-onboarding.types';

export const MobileOnboarding = ({
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
}: IMobileOnboardingProps): JSX.Element => {
  const router = useRouter();
  const { confirm } = useConfirmationModal();
  const { isLoading: isProfileLoading, user } = useUser();
  const translations = useTranslation(translationStrings);

  const { isLoading: isCreateAccountActionLoading, mutateAsync: mutateAsyncCreateAccountAction } =
    useMutation(createProfileAction);

  const [current, send] = useMachine(onboardingStateMachine);

  useEffect(() => {
    if (!isProfileLoading && user?.contact_email) {
      send({
        type: EMobileOnboardingMachineAdditionalEvents.SET_PROFILE_DATA_FROM_SUPABASE,
        fullName: user.user_metadata.full_name,
        contactEmail: user.contact_email,
      });
    }
  }, [isProfileLoading, user?.contact_email]);

  const onContinueButtonClick = (
    data:
      | IMobileOnboardingStepOneData
      | IMobileOnboardingStepTwoData
      | IMobileOnboardingStepThreeData
      | IMobileOnboardingStepFourData
      | IMobileOnboardingStepFiveStartupData
      | IMobileOnboardingStepSixStartupData
      | IMobileOnboardingStepSevenStartupData
      | IMobileOnboardingStepEightStartupData
      | IMobileOnboardingStepNineStartupData
      | IMobileOnboardingStepFiveInvestorData
      | IMobileOnboardingStepSixInvestorData
      | IMobileOnboardingStepSevenInvestorData
      | IMobileOnboardingStepEightInvestorData
      | IMobileOnboardingStepNineInvestorData,
  ) => send({ type: EMobileOnboardingMachineEvents.NEXT, data });

  const onAcceptHouseRulesAgreements = () =>
    // @ts-expect-error
    mutateAsyncCreateAccountAction({ ...current.context, userRef })
      .then(() => {
        toast.success(translations.componentOnboardingCommonSuccessToastMessage);

        setTimeout(() => router.push(ERoutes.DASHBOARD), 2000);
      })
      .catch(() => toast.error(translations.commonErrorsSomethingWentWrong));

  const onBackButtonClick = () => send(EMobileOnboardingMachineEvents.BACK);

  const onFirstStepBackButtonClick = () =>
    confirm({
      title: translations.commonPromptUnsavedTitle,
      cancellationText: translations.commonButtonsCancel,
      confirmationText: translations.commonButtonsContinue,
      description: translations.commonPromptUnsavedDescription,
    }).then(() => router.push(ERoutes.HOME));

  if (isProfileLoading || !user?.contact_email || current.context.stepTwoData.contactEmail === '') {
    return (
      <Loading>
        <Image
          priority
          alt="Tinvesta"
          layout="fill"
          objectFit="cover"
          src="/images/background/mobile-onboarding.svg"
        />
      </Loading>
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_ONE)) {
    return (
      <MobileOnboardingStepOne
        defaultValues={current.context.stepOneData}
        onBackButtonClick={onFirstStepBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_TWO)) {
    return (
      <MobileOnboardingStepTwo
        clientTypes={clientTypes}
        defaultValues={current.context.stepTwoData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_THREE)) {
    return (
      <MobileOnboardingStepThree
        defaultValues={current.context.stepThreeData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_FOUR)) {
    return (
      <MobileOnboardingStepFour
        defaultValues={current.context.stepFourData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_FIVE_STARTUP)) {
    return (
      <MobileOnboardingStepFiveStartup
        defaultValues={current.context.stepFiveStartupData}
        startupProfileCreatorTypes={startupProfileCreatorTypes}
        teamSizes={teamSizes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_SIX_STARTUP)) {
    return (
      <MobileOnboardingStepSixStartup
        defaultValues={current.context.stepSixStartupData}
        industrialSectors={industrialSectors}
        startupSectors={startupSectors}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_SEVEN_STARTUP)) {
    return (
      <MobileOnboardingStepSevenStartup
        defaultValues={current.context.stepSevenStartupData}
        focusMarkets={focusMarkets}
        investmentSizes={investmentSizes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_EIGHT_STARTUP)) {
    return (
      <MobileOnboardingStepEightStartup
        defaultValues={current.context.stepEightStartupData}
        investmentStageTypes={investmentStageTypes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_NINE_STARTUP)) {
    return (
      <MobileOnboardingStepNineStartup
        defaultValues={current.context.stepNineStartupData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_FIVE_INVESTOR)) {
    return (
      <MobileOnboardingStepFiveInvestor
        defaultValues={current.context.stepFiveInvestorData}
        focusMarkets={focusMarkets}
        investorProfileTypes={investorProfileTypes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_SIX_INVESTOR)) {
    return (
      <MobileOnboardingStepSixInvestor
        defaultValues={current.context.stepSixInvestorData}
        industrialSectors={industrialSectors}
        startupSectors={startupSectors}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_SEVEN_INVESTOR)) {
    return (
      <MobileOnboardingStepSevenInvestor
        defaultValues={current.context.stepSevenInvestorData}
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_EIGHT_INVESTOR)) {
    return (
      <MobileOnboardingStepEightInvestor
        defaultValues={current.context.stepEightInvestorData}
        investorDemandTypes={investorDemandTypes}
        teamSizes={teamSizes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_NINE_INVESTOR)) {
    return (
      <MobileOnboardingStepNineInvestor
        defaultValues={current.context.stepNineInvestorData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  return (
    <MobileHouseRulesAgreements
      isLoading={isCreateAccountActionLoading}
      onAgreementButtonClick={onAcceptHouseRulesAgreements}
      onBackButtonClick={onBackButtonClick}
    />
  );
};
