import { FormHTMLAttributes, ReactNode } from 'react';

export interface IMobileOnboardingFormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  columnSpacing?: number;
  continueButtonText?: string;
  currentStep?: number;
  displayBackButton?: boolean;
  heading?: string;
  isLoading?: boolean;
  onBackButtonClick: () => void;
  rowSpacing?: number;
}
