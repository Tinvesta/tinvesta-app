import { useMachine } from '@xstate/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { CenterBlockLayout, Loader } from '@ui';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

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
import { createAccountAction } from '../api';
import {
  EMobileOnboardingMachineAdditionalEvents,
  EMobileOnboardingMachineEvents,
  EMobileOnboardingMachineStates,
  onboardingStateMachine,
} from './machines';
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
}: IMobileOnboardingProps): JSX.Element => {
  const { isLoading: isProfileLoading, user } = useUser();
  const router = useRouter();

  const { isLoading: isCreateAccountActionLoading, mutateAsync: mutateAsyncCreateAccountAction } =
    useMutation(createAccountAction);

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
    mutateAsyncCreateAccountAction(current.context)
      .then(() => router.push(ERoutes.DASHBOARD))
      // TODO - take translation based on error response
      .catch(() => toast.error('Something went wrong'));

  if (isProfileLoading || !user?.contact_email || current.context.stepTwoData.contactEmail === '') {
    return (
      <CenterBlockLayout>
        <Image
          priority
          alt="Tinvesta"
          layout="fill"
          objectFit="cover"
          src="/images/mobile-onboarding-background.svg"
        />
        <Loader size="large" />
      </CenterBlockLayout>
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_ONE)) {
    return (
      <MobileOnboardingStepOne
        defaultValues={current.context.stepOneData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_TWO)) {
    return (
      <MobileOnboardingStepTwo
        clientTypes={clientTypes}
        defaultValues={current.context.stepTwoData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_THREE)) {
    return (
      <MobileOnboardingStepThree
        defaultValues={current.context.stepThreeData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_FOUR)) {
    return (
      <MobileOnboardingStepFour
        defaultValues={current.context.stepFourData}
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
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_EIGHT_STARTUP)) {
    return (
      <MobileOnboardingStepEightStartup
        defaultValues={current.context.stepEightStartupData}
        investmentStageTypes={investmentStageTypes}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_NINE_STARTUP)) {
    return (
      <MobileOnboardingStepNineStartup
        defaultValues={current.context.stepNineStartupData}
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
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_NINE_INVESTOR)) {
    return (
      <MobileOnboardingStepNineInvestor
        defaultValues={current.context.stepNineInvestorData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  return (
    <MobileHouseRulesAgreements
      isLoading={isCreateAccountActionLoading}
      onAgreementButtonClick={onAcceptHouseRulesAgreements}
    />
  );
};
