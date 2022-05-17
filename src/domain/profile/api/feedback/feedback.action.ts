import { nextAxiosInstance } from '@infrastructure';

import { EApiEndpoint } from '@enums';

import { IFeedbackFormFieldsData } from '../../profile.types';

export const feedbackAction = async (feedback: IFeedbackFormFieldsData) =>
  nextAxiosInstance.post(EApiEndpoint.FEEDBACK, feedback);
