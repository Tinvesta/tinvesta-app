import { FormHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

import { IFeedbackFormFieldsData } from '../../profile.types';

export interface IFeedbackFormProps extends FormHTMLAttributes<HTMLFormElement> {
  control: Control<IFeedbackFormFieldsData>;
  isDirty: boolean;
  isLoading: boolean;
  onResetButtonClick: () => void;
}
