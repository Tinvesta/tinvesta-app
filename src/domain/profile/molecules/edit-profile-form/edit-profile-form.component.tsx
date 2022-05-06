import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { useTranslation, useUser } from '@utils';

import {
  PROFILE_DETAILS_ACTION_QUERY_KEY,
  profileDetailsAction,
  updateProfileAction,
} from '../../api';
import { InvestorEditProfileForm, SectionWrapperLayout } from '../../atoms';
import { IEditProfileFormFieldsData } from '../../profile.types';
import { defaultFormFieldsValues, translationStrings } from './edit-profile-form.defaults';
import { IEditProfileFormProps } from './edit-profile-form.types';

export const EditProfileForm = ({
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  startupSectors,
  teamSizes,
}: IEditProfileFormProps): JSX.Element => {
  const { user } = useUser();
  const { data: profileDetailsActionData } = useQuery(
    [PROFILE_DETAILS_ACTION_QUERY_KEY, user?.id],
    profileDetailsAction(user?.id),
  );
  const translations = useTranslation(translationStrings);
  const [defaultValues, setDefaultValues] = useState(defaultFormFieldsValues);
  const { control, formState, handleSubmit, reset, setValue } = useForm<IEditProfileFormFieldsData>(
    {
      defaultValues,
    },
  );

  const { isLoading: isUpdateProfileActionLoading, mutateAsync: mutateAsyncUpdateProfileAction } =
    useMutation(updateProfileAction);

  useEffect(() => {
    const profileDetails = profileDetailsActionData?.data;

    if (profileDetails) {
      setValue('images', profileDetails.avatars, { shouldValidate: true });
      setValue('location', profileDetails.location, { shouldValidate: true });
      setValue('lastName', profileDetails.lastName, { shouldValidate: true });
      setValue('firstName', profileDetails.firstName, { shouldValidate: true });
      setValue('teamSizeIds', profileDetails.teamSizes, { shouldValidate: true });
      setValue('companyName', profileDetails.companyName, { shouldValidate: true });
      setValue('contactEmail', profileDetails.contactEmail, { shouldValidate: true });
      setValue('focusMarketIds', profileDetails.focusMarkets, { shouldValidate: true });
      setValue('startupSectorIds', profileDetails.startupSectors, { shouldValidate: true });
      setValue('investmentSizeIds', profileDetails.investmentSizes, { shouldValidate: true });
      setValue('industrialSectorIds', profileDetails.industrialSectors, { shouldValidate: true });
      setValue('investorDemandTypeIds', profileDetails.investorDemandTypes, {
        shouldValidate: true,
      });
      setValue('investmentStageTypeIds', profileDetails.investmentStageTypes, {
        shouldValidate: true,
      });
      setValue('investorProfileTypeId', profileDetails.investorProfileTypeId || '', {
        shouldValidate: true,
      });
      setValue('whyStartupShouldMatchWithYou', profileDetails.whyStartupShouldMatchWithYou, {
        shouldValidate: true,
      });

      setDefaultValues((prev) => ({
        ...prev,
        images: profileDetails.avatars,
        location: profileDetails.location,
        lastName: profileDetails.lastName,
        firstName: profileDetails.firstName,
        teamSizeIds: profileDetails.teamSizes,
        companyName: profileDetails.companyName,
        contactEmail: profileDetails.contactEmail,
        focusMarketIds: profileDetails.focusMarkets,
        startupSectorIds: profileDetails.startupSectors,
        investmentSizeIds: profileDetails.investmentSizes,
        industrialSectorIds: profileDetails.industrialSectors,
        investorDemandTypeIds: profileDetails.investorDemandTypes,
        investmentStageTypeIds: profileDetails.investmentStageTypes,
        investorProfileTypeId: profileDetails.investorProfileTypeId || '',
        whyStartupShouldMatchWithYou: profileDetails.whyStartupShouldMatchWithYou,
      }));
    }
  }, [profileDetailsActionData?.data]);

  const onSubmit = (data: IEditProfileFormFieldsData) => {
    mutateAsyncUpdateProfileAction({ newData: data, oldData: defaultValues })
      .then(() => {
        reset(data);
        setDefaultValues(data);
        toast.success(translations.componentDashboardEditProfileFormMessagesSuccess);
      })
      .catch(() => toast.error(translations.commonErrorsSomethingWentWrong));
  };

  const handleResetButtonClick = () => reset(defaultValues);

  return (
    <SectionWrapperLayout title={translations.componentDashboardEditProfileFormInvestorHeading}>
      <InvestorEditProfileForm
        control={control}
        focusMarkets={focusMarkets}
        industrialSectors={industrialSectors}
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        investorDemandTypes={investorDemandTypes}
        investorProfileTypes={investorProfileTypes}
        isDirty={formState.isDirty}
        isLoading={isUpdateProfileActionLoading}
        startupSectors={startupSectors}
        teamSizes={teamSizes}
        onResetButtonClick={handleResetButtonClick}
        onSubmit={handleSubmit(onSubmit)}
      />
    </SectionWrapperLayout>
  );
};
