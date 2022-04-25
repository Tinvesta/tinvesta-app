import { FormHTMLAttributes, ReactNode } from 'react';

export interface IMobileOnboardingFormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  continueButtonText?: string;
  displayBackButton?: boolean;
  heading?: string;
  isLoading?: boolean;
  onBackButtonClick?: () => void;
  subHeading?: string;
}
