import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { useTranslation } from '@utils';

import { feedbackAction } from '../../api';
import { FeedbackForm, SectionWrapperLayout } from '../../atoms';
import { IFeedbackFormFieldsData } from '../../profile.types';
import { defaultFormFieldsValues, translationStrings } from './feedback-section.defaults';

export const FeedbackSection = (): JSX.Element => {
  const translations = useTranslation(translationStrings);

  const { isLoading: isFeedbackActionLoading, mutateAsync: mutateAsyncFeedbackAction } =
    useMutation(feedbackAction);

  const { control, formState, handleSubmit, reset } = useForm<IFeedbackFormFieldsData>({
    defaultValues: defaultFormFieldsValues,
  });

  const onSubmit = (data: IFeedbackFormFieldsData) =>
    mutateAsyncFeedbackAction(data)
      .then(() => {
        reset(defaultFormFieldsValues);
        toast.success(translations.componentDashboardFeedbackFormMessagesSuccess);
      })
      .catch(() => toast.error(translations.commonErrorsSomethingWentWrong));

  const handleResetButtonClick = () => reset(defaultFormFieldsValues);

  return (
    <SectionWrapperLayout title={translations.componentDashboardFeedbackFormHeading}>
      <FeedbackForm
        control={control}
        isDirty={formState.isDirty}
        isLoading={isFeedbackActionLoading}
        onResetButtonClick={handleResetButtonClick}
        onSubmit={handleSubmit(onSubmit)}
      />
    </SectionWrapperLayout>
  );
};
