import { IFeedbackFormFieldsData } from '../../profile.types';

export const translationStrings = [
  'common.errors.something.went.wrong',

  'component.dashboard.feedback.form.heading',
  'component.dashboard.feedback.form.messages.success',
] as const;

export const defaultFormFieldsValues: IFeedbackFormFieldsData = {
  rating: 10,
  message: '',
};
