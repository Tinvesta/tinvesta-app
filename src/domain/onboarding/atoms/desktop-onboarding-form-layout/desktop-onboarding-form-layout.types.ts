import { FormHTMLAttributes, ReactNode } from 'react';

export interface IDesktopOnboardingFormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  addArrowToBackButton?: boolean;
  backButtonText?: string;
  centerActionButton?: boolean;
  children: ReactNode;
  continueButtonText?: string;
  heading?: string;
  isLoading?: boolean;
  onBackButtonClick?: () => void;
  subHeading?: string;
}
