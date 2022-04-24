import { FormHTMLAttributes, ReactNode } from 'react';

export interface IDesktopOnboardingFormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  addArrowToBackButton?: boolean;
  backButtonText?: string;
  centerActionButtons?: boolean;
  children: ReactNode;
  continueButtonText?: string;
  heading?: string;
  isLoading?: boolean;
  onBackButtonClick?: () => void;
  subHeading?: string;
}
