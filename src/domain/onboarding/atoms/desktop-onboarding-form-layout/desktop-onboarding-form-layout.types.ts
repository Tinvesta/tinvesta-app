import { FormHTMLAttributes, ReactNode } from 'react';

export interface IDesktopOnboardingFormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  heading: string;
  subHeading?: string;
}
