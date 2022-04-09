import { FormHTMLAttributes, ReactNode } from 'react';

export interface IDesktopOnboardingFormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  backButtonText?: string;
  children: ReactNode;
  continueButtonText?: string;
  heading: string;
  onBackButtonClick?: () => void;
  subHeading?: string;
}
